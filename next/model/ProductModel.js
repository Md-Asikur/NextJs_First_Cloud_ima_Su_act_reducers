import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      default: "Test Images",
    },
  },
  { timestamps: true }
);
mongoose.models = {};
export const Product = mongoose.model("product", productSchema);
