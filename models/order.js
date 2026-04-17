import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
    unique: true,
  },

  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  addressline1: {
    type: String,
    required: true,
  },

  addressline2: {
    type: String,
  },

  city: {
    type: String,
    requried: true,
  },

  country: {
    type: String,
    requried: true,
    default : "Sri Lanka"
  },

  postalCode: {
    type: String,
    requried: true,
  },

  email: {
    type: String,
    requried: true,
  },

  phone: {
    type: String,
    requried: true,
  },

  items: {
    type: [
      {
        productId: {
          type: String,
          required: true,
        },

        name: {
          type: String,
          requried: true,
        },

        labelledPrice: {
          type: Number,
        },

        price: {
          type: Number,
          requried: true,
        },

        image: {
          type: String,
          default: "https://via.placeholder.com/150",
        },

        qty: {
          type: Number,
          requried: true,
        },
      },
    ],
  },

  total: {
    type: Number,
    required: true,
  },

  status: {
    type: String,
    required: true,
    default: "Pending",
  },

  date: {
    type: Date,
    default: Date.now,
  },

  notes: {
    type: String,
  },
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
