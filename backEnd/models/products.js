import mongoose from "mongoose";


const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: [{ support: { type: String, required: true } }],
    price: { type: Number, required: true },
    offPrice: { type: Number, required: true },
    discount: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productSchema);
