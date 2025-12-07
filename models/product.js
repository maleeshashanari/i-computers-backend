import mongoose from "mongoose";

const proudctSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  //විකල්ප නාම ලැයිස්තුවකි
  altNames: {
    type: [String],
    default: [],
  },

  price: {
    type: Number,
    required: true,
  },
  labelledPrice: {
    type: Number,
  },
  category: {
    type: String,
    default: "Others",
  },
  images: {
    type: [String],
    default: ["/images/default-product-1.png", "/images/default-product-2.png"],
  },
  //මෙම නිෂ්පාදනය වෙබ් අඩවියේ පෙන්විය යුතුද නැද්ද යන්න තීරණය කරයි.
  isVisible: {
    type: Boolean,
    default: true,
    required: true,
  },
  brand: {
    type: String,
    default: "Generic",
  },
  model: {
    type: String,
    default: "Standard",
  },
});

const Product = mongoose.model("Product", proudctSchema);

export default Product;
