import express from "express";
import expressAsyncHandler from "express-async-handler";
import Order from "../models/order.js";
import { isAdmin, isAuth } from "../utils.js";

const router = express.Router();

router.get(
  "/",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const orders = await Order.find()
      .populate("user")
      .populate("orderItems.product");
    res.status(200).send(orders);
  })
);

router.get(
  "/mine",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const paidOrders = await Order.find({
      $and: [{ user: req.user._id }, { isPaid: true }],
    });

    res.send(paidOrders);
  })
);

// find number of student for each course :

router.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    if (req.body.orderItems.length === 0)
      return res.status(400).send({ message: "Cart is empty" });

    // calculate total price from back-end :
    let totalPrice = 0;
    for (let item of req.body.orderItems) {
      const currItem = await Products.findById(item.product);
      totalPrice =
        totalPrice + parseInt(item.quantity) * parseInt(currItem.offPrice);
    }

    const order = new Order({
      orderItems: req.body.orderItems,
      isPaid: true,
      totalPrice: totalPrice,
      user: req.user._id,
    });

    try {
      const savedOrder = await order.save();
      res.send(savedOrder);
    } catch (error) {
      res.status(400).send(error);
    }
  })
);

router.get(
  "/:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) return res.send(order);
    return res.status(404).send({ message: "Order Not Found" });
  })
);

export default router;
