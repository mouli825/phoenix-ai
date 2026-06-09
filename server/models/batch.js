const mongoose = require("mongoose");

const batchSchema = new mongoose.Schema(
  {
    medicine: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Medicine",
      required: true,
    },

    batchNo: {
      type: String,
      required: true,
    },

    currentStock: {
      type: Number,
      default: 0,
    },

    purchasePrice: {
      type: Number,
      required: true,
    },

    sellingPrice: {
      type: Number,
      required: true,
    },

    discount: {
      type: Number,
      default: 0,
    },

    mfgDate: {
      type: Date,
    },

    expDate: {
      type: Date,
    },

    supplier: {
      type: String,
    },

    invoiceNo: {
      type: String,
    },

    invoiceDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Batch", batchSchema);