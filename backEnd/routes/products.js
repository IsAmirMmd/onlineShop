import express from "express";
import asyncHandler from "express-async-handler";
import * as data from "../data.js";
import Products from "../models/products.js";
import { isAuth, isAdmin } from "../utils.js";

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    try {
      const products = await Products.find();
      res.json(products);
    } catch (error) {
      res.status(400).json({ message: "product get error !! " });
    }
  })
);

router.get(
  "/seed",
  // isAuth,
  // isAdmin,
  asyncHandler(async (req, res) => {
    console.log(data.products);
    const createdProducts = await Products.insertMany(data.products);
    res.send({ createdProducts });
  })
);

router.get("/:id", async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    res.send(product);
  } catch (error) {
    res.status(404).send("product does does not exist");
  }
});

export default router;

