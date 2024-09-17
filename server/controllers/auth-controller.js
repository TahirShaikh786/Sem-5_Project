const User = require("../models/user-model");

const home = async (req, res) => {
  try {
    res.status(200).send("Hello World From Router");
  } catch (error) {
    res.status(500).send({ msg: "Page Not Found" });
  }
};

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;

    // Check if username is already Register Or not
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "Email Already Exist" });
    }

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    res.status(201).json({
      message: "Registration Successfullly Completed",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const user = await userExist.comparePassword(password);

    if (user) {
      const token = await userExist.generateToken();
      console.log("Token generated:", token);
      res.status(200).json({
        msg: "Login Successful",
        token: token,
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid Email & Password" });
    }
  } catch (error) {
    console.error("Login Error:", error);
    next(error);
  }
};

const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ userData });
  } catch (error) {
    console.log("error from user router");
  }
};

module.exports = { home, register, login, user };
