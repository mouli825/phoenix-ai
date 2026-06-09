const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
    },

    customerType: {
      type: String,
      enum: ["Hospital", "Pharmacy", "Dialysis Center"],
      required: true,
    },

    contactPerson: String,

    phone: String,

    email: String,

    address: String,

    discountPercent: {
      type: Number,
      default: 0,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Customer", customerSchema);