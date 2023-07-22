import express from "express";
import asyncHandler from "express-async-handler";
import { registerValidation, loginValidation } from "../validation.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import * as data from "../data.js";
import User from "../models/user.js";
import { generateToken, isAdmin, isAuth } from "./../utils.js";

const router = express.Router();

router.get(
  "/seed",
  // isAuth,
  // isAdmin,
  asyncHandler(async (req, res) => {
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);

router.post(
  "/register",
  asyncHandler(async (req, res) => {
    // validate user data
    const { error } = registerValidation(req.body);
    if (error)
      return res.status(400).json({ message: error.details[0].message });

    // checking if the user is already in the data base :
    const emailExist = await User.findOne({ email: req.body.email });
    const phoneNumberExist = await User.findOne({
      phoneNumber: req.body.phoneNumber,
    });

    if (emailExist)
      return res.status(400).json({ message: "Email already exists !" });
    if (phoneNumberExist)
      return res.status(400).json({ message: "phone Number already exists !" });

    // HASH PASSWORD :
    const salt = await bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hashSync(req.body.password, salt);

    const user = new User({
      name: req.body.name,
      email: req.body.email.toLowerCase(),
      phoneNumber: req.body.phoneNumber,
      password: hashedPassword,
    });

    try {
      const savedUser = await user.save();
      res.json({
        _id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email,
        isAdmin: savedUser.isAdmin,
        phoneNumber: savedUser.phoneNumber,
        token: generateToken(savedUser),
      });
    } catch (error) {
      res.status(400).send(error);
    }
  })
);

router.post(
  "/login",
  asyncHandler(async (req, res) => {
    // validate user data
    const { error } = loginValidation(req.body);
    if (error)
      return res.status(400).json({ message: error.details[0].message });

    // checking if the email exists :
    const user = await User.findOne({ email: req.body.email.toLowerCase() });
    if (!user) return res.status(400).json({ message: "ایمیل وجود ندارد" });

    // PASSWORD IS CORRECT :
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass)
      return res.status(400).json({ message: "ایمیل یا رمز عبور اشتباه است" });

    res.send({
      _id: user._id,
      name: user.name,
      phoneNumber: user.phoneNumber,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user),
    });
  })
);

export default router;
