const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },

    unit: {
      type: String,
      required: true,
    },

    batchNo: {
      type: String,
      required: true,
    },

    purchasePrice: {
      type: Number,
      required: true,
    },

    salePrice: {
      type: Number,
      required: true,
    },

    stock: {
      type: Number,
      default: 0,
    },

    manufacturer: {
      type: String,
    },

    supplier: {
      type: String,
    },

    mfgDate: {
      type: Date,
    },

    expDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Medicine", medicineSchema);