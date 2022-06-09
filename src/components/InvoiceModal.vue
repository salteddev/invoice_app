<template>
  <div @click="checkClick" ref="invoiceWrap" class="invoice-wrap flex flex-column">
    <form @submit.prevent="submitForm" class="invoice-content">
      <Loading v-show="loading"/>
      <h1 v-if="!editInvoice">New Invoice</h1>
      <h1 v-else>Edit Invoice</h1>
      <div class="bill-from flex flex-column">
        <h4>Bill From</h4>
        <div class="input flex flex-column">
          <label for="billerStreetAddress">Street Address</label>
          <input required type="text" id="billerStreetAddress" v-model="billerStreetAddress">
        </div>
        <div class="location-details flex">
          <div class="input flex flex-column">
            <label for="billerCity">City</label>
            <input required type="text" id="billerCity" v-model="billerCity">
          </div>
          <div class="input flex flex-column">
            <label for="billerZipCode">Zip Code</label>
            <input required type="text" id="billerZipCode" v-model="billerZipCode">
          </div>
          <div class="input flex flex-column">
            <label for="billerCountry">Country</label>
            <input required type="text" id="billerCountry" v-model="billerCountry">
          </div>
        </div>
      </div>
      <div class="bill-to flex flex-column">
        <h4>Bill To</h4>
        <div class="input flex flex-column">
          <label for="clientName">Client's Name</label>
          <input required type="text" id="clientName" v-model="clientName">
        </div>
        <div class="input flex flex-column">
          <label for="clientEmail">Client's Email</label>
          <input required type="text" id="clientEmail" v-model="clientEmail">
        </div>
        <div class="input flex flex-column">
          <label for="clientStreetAddress">Street Address</label>
          <input required type="text" id="clientStreetAddress" v-model="clientStreetAddress">
        </div>
        <div class="location-details flex">
          <div class="input flex flex-column">
            <label for="clientCity">City</label>
            <input required type="text" id="clientCity" v-model="clientCity">
          </div>
          <div class="input flex flex-column">
            <label for="clientZipCode">Zip Code</label>
            <input required type="text" id="clientZipCode" v-model="clientZipCode">
          </div>
          <div class="input flex flex-column">
            <label for="clientCountry">Country</label>
            <input required type="text" id="clientCountry" v-model="clientCountry">
          </div>
        </div>
      </div>
      <div class="invoice-work flex flex-column">
        <div class="payment flex">
          <div class="input flex flex-column">
            <label for="invoiceDate">Invoice Date</label>
            <input disabled type="text" id="invoiceDate" v-model="invoiceDate">
          </div>
          <div class="input flex flex-column">
            <label for="paymentDueDate">Payment Due</label>
            <input disabled type="text" id="paymentDueDate" v-model="paymentDueDate">
          </div>
        </div>
        <div class="input flex flex-column">
          <label for="paymentTerms">Payment Terms</label>
          <select required id="paymentTerms" v-model="paymentTerms">
            <option value="30">
              Net 30 days
            </option>
            <option value="60">
              Net 60 days
            </option>
          </select>
        </div>
        <div class="input flex flex-column">
          <label for="productDescription">Product Description</label>
          <input type="text" id="productDescription" v-model="productDescription">
        </div>
        <div class="work-items">
          <h3>Item List</h3>
          <table class="item-list">
            <tr class="table-heading flex">
              <th class="item-name">Item name</th>
              <th class="qty">Qty</th>
              <th class="price">Price</th>
              <th class="total">Total</th>
            </tr>
            <tr class="table-item flex" v-for="(item, index) in invoiceItemList" :key="index">
              <td class="item-name"><input type="text" v-model="item.itemName"/></td>
              <td class="qty"><input type="text" v-model="item.qty"/></td>
              <td class="price"><input type="text" v-model="item.price"/></td>
              <td class="total flex">${{ (item.total = item.qty * item.price) }}</td>
              <img @click="deleteInvoiceItem(item.id)" src="@/assets/icon-delete.svg" alt="">
            </tr>
          </table>
          <div @click="addNewInvoiceItem" class="flex button">
            <img src="@/assets/icon-plus.svg" alt="">
            Add New Item
          </div>
        </div>
      </div>
      <div class="save flex">
        <div class="left">
          <button type="button" @click="closeInvoice" class="red">Cancel</button>
        </div>
        <div class="right flex">
          <button v-if="!editInvoice" type="submit" @click="saveDraft" class="dark-purple">Save Draft</button>
          <button v-if="!editInvoice" type="submit" @click="publishInvoice" class="purple">Create Invoice</button>
          <button v-if="editInvoice" type="submit"  class="purple">Update Invoice</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";
import {v4} from 'uuid';
import db from '@/firebase/firebaseInit';
import {collection, doc, getDocs, setDoc, addDoc, updateDoc} from "firebase/firestore";
import Loading from "@/components/Loading";
import invoice from "@/components/Invoice";

export default {
  name: "InvoiceModal",
  data() {
    return {
      dateOptions: {year: 'numeric', month: 'short', day: 'numeric'},
      docId: null,
      billerStreetAddress: null,
      billerCity: null,
      billerZipCode: null,
      billerCountry: null,
      clientName: null,
      clientEmail: null,
      clientStreetAddress: null,
      clientCity: null,
      clientZipCode: null,
      clientCountry: null,
      invoiceDateUnix: null,
      invoiceDate: null,
      paymentTerms: null,
      paymentDueDateUnix: null,
      paymentDueDate: null,
      productDescription: null,
      invoicePending: null,
      invoicePaid: null,
      invoiceDraft: null,
      invoiceItemList: [],
      invoiceTotal: 0,
      loading: null,
    }
  },
  created() {
    if (!this.editInvoice) {
      this.invoiceDateUnix = Date.now();
      this.invoiceDate = new Date(this.invoiceDateUnix).toLocaleDateString('en-us', this.dateOptions);
    }
    if (this.editInvoice){
      const currentInvoice = this.currentInvoiceArray[0];
      this.docId = currentInvoice.docId;
      this.billerStreetAddress = currentInvoice.billerStreetAddress;
      this.billerCity = currentInvoice.billerCity;
      this.billerZipCode = currentInvoice.billerZipCode;
      this.billerCountry = currentInvoice.billerCountry;
      this.clientName = currentInvoice.clientName;
      this.clientEmail = currentInvoice.clientEmail
      this.clientStreetAddress = currentInvoice.clientStreetAddress;
      this.clientCity = currentInvoice.clientCity;
      this.clientZipCode = currentInvoice.clientZipCode;
      this.clientCountry = currentInvoice.clientCountry;
      this.invoiceDateUnix = currentInvoice.invoiceDateUnix;
      this.invoiceDate = currentInvoice.invoiceDate;
      this.paymentTerms = currentInvoice.paymentTerms;
      this.paymentDueDateUnix = currentInvoice.paymentDueDateUnix;
      this.paymentDueDate = currentInvoice.paymentDueDate;
      this.productDescription = currentInvoice.productDescription;
      this.invoicePending = currentInvoice.invoicePending;
      this.invoicePaid = currentInvoice.invoicePaid;
      this.invoiceDraft = currentInvoice.invoiceDraft;
      this.invoiceItemList = currentInvoice.invoiceItemList;
      this.invoiceTotal = currentInvoice.invoiceTotal;
    }
  },
  methods: {
    ...mapMutations(['TOGGLE_INVOICE', 'TOGGLE_MODAL', 'TOGGLE_EDIT_INVOICE']),
    ...mapActions(['UPDATE_INVOICE', 'GET_INVOICES']),
    checkClick(e) {
      if (e.target === this.$refs.invoiceWrap) {
        this.TOGGLE_MODAL();
      }
    },
    closeInvoice() {
      this.TOGGLE_INVOICE();
      if (this.editInvoice) {
        this.TOGGLE_EDIT_INVOICE()
      }
    },
    addNewInvoiceItem() {
      this.invoiceItemList.push({
        id: v4(),
        itemName: '',
        qty: '',
        price: 0,
        total: 0,
      })
    },
    deleteInvoiceItem(id) {
      this.invoiceItemList = this.invoiceItemList.filter(item => item.id !== id)
    },
    calInvoiceTotal() {
      this.invoiceTotal = 0;
      this.invoiceItemList.forEach(item => {
        this.invoiceTotal += item.total;
      });
    },
    publishInvoice() {
      this.invoicePending = true;
    },
    saveDraft() {
      this.invoiceDraft = true;
    },
    async uploadInvoice() {
      if (this.invoiceItemList.length <= 0) {
        alert('Please ensure you filled out work items!');
        return;
      }

      this.loading = true;

      this.calInvoiceTotal();
      await addDoc(collection(db, "invoices"), {
        invoiceId: v4(),
        billerStreetAddress: this.billerStreetAddress,
        billerCity: this.billerCity,
        billerZipCode: this.billerZipCode,
        billerCountry: this.billerCountry,
        clientName: this.clientName,
        clientEmail: this.clientEmail,
        clientStreetAddress: this.clientStreetAddress,
        clientCity: this.clientCity,
        clientZipCode: this.clientZipCode,
        clientCountry: this.clientCountry,
        invoiceDateUnix: this.invoiceDateUnix,
        invoiceDate: this.invoiceDate,
        paymentTerms: this.paymentTerms,
        paymentDueDateUnix: this.paymentDueDateUnix,
        paymentDueDate: this.paymentDueDate,
        productDescription: this.productDescription,
        invoicePending: this.invoicePending,
        invoiceDraft: this.invoiceDraft,
        invoicePaid: this.invoicePaid,
        invoiceItemList: this.invoiceItemList,
        invoiceTotal: this.invoiceTotal,
      });
      this.loading = false;
      this.TOGGLE_INVOICE();
      this.GET_INVOICES();
    },


    async updateInvoice() {
      if (this.invoiceItemList.length <= 0) {
        alert('Please ensure you filled out work items!');
        return;
      }

      this.loading = true;

      this.calInvoiceTotal();

      await updateDoc(doc(db, "invoices", this.docId), {
        billerStreetAddress: this.billerStreetAddress,
        billerCity: this.billerCity,
        billerZipCode: this.billerZipCode,
        billerCountry: this.billerCountry,
        clientName: this.clientName,
        clientEmail: this.clientEmail,
        clientStreetAddress: this.clientStreetAddress,
        clientCity: this.clientCity,
        clientZipCode: this.clientZipCode,
        clientCountry: this.clientCountry,
        paymentTerms: this.paymentTerms,
        paymentDueDateUnix: this.paymentDueDateUnix,
        paymentDueDate: this.paymentDueDate,
        productDescription: this.productDescription,
        invoiceItemList: this.invoiceItemList,
        invoiceTotal: this.invoiceTotal,
      });
      this.loading = false;
      const data = {
        docId: this.docId,
        routeId: this.$route.params.invoiceId,
      };


      this.UPDATE_INVOICE(data);
    },
    submitForm() {
      if (this.editInvoice){
        this.updateInvoice()
        return;
      }
      this.uploadInvoice()
    },
  },
  watch: {
    paymentTerms() {
      const futureDate = new Date();
      this.paymentDueDateUnix = futureDate.setDate(futureDate.getDate() + parseInt(this.paymentTerms));
      this.paymentDueDate = new Date(this.paymentDueDateUnix).toLocaleString('en-us', this.dateOptions)
    }
  },
  computed: {
    ...mapState(['editInvoice', 'currentInvoiceArray'])
  },
  components: {
    Loading,
  }
}
</script>

<style lang="scss" scoped>
.invoice-wrap {
  position: fixed;
  top: 0;
  left: 0;
  background: transparent;
  height: 100vh;
  overflow-y: scroll;
  width: 100%;
  @media(min-width: 900px) {
    left: 90px;

  }

  .invoice-content {
    position: relative;
    padding: 56px;
    max-width: 700px;
    width: 100%;
    background: #141625;
    color: #fff;
    box-shadow: 10px 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

    h1 {
      margin-bottom: 48px;
      color: #ffffff;
    }

    h3 {
      margin-bottom: 16px;
      font-size: 18px;
      color: #777f98;
    }

    h4 {
      font-size: 12px;
      margin-bottom: 24px;
      color: #7c5dfa;
    }

    .bill-from, .bill-to {
      margin-bottom: 48px;

      .location-details {
        gap: 16px;

        div {
          flex: 1;
        }
      }
    }

    .invoice-work {
      .payment {
        gap: 24px;

        div {
          flex: 1;
        }
      }

      .work-items {
        .item-list {
          width: 100%;

          .table-heading, .table-item {
            gap: 16px;
            font-size: 12px;
            margin-bottom: 10px;

            .item-name {
              flex-basis: 50%;
            }

            .qty {
              flex-basis: 10%;
            }

            .price {
              flex-basis: 20%;
            }

            .total {
              flex-basis: 20%;
              align-self: center;
            }

            img {
              align-self: center;
            }
          }

          .table-heading {
            margin-bottom: 16px;

            th {
              text-align: left;
            }
          }

          .table-items {
            position: relative;
            margin-bottom: 24px;

            img {
              position: absolute;
              top: 15px;
              right: 0;
              width: 12px;
              height: 16px;
            }

          }
        }

        .button {
          color: #fff;
          background: #252945;
          align-items: center;
          justify-content: center;
          width: 100%;

          img {
            margin-right: 4px;
          }
        }
      }


    }

    .save {
      margin-top: 16px;

      div {
        flex: 1;
      }

      .right {
        justify-content: flex-end;
      }
    }
  }

  .input {
    margin-bottom: 24px;
  }

  label {
    font-size: 12px;
    margin-bottom: 6px;
  }

  input, select {
    width: 100%;
    background-color: #1e2139;
    color: #fff;
    border-radius: 4px;
    padding: 12px 4px;
    border: none;

    &:focus {
      outline: none;
    }
  }

  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar-track {
    background: #1e2139;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #7c5dfa;
    border-radius: 20px;
  }
}
</style>