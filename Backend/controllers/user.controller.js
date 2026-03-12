import User, { findOne } from "../models/User";
import { genSalt, hash, compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

// REGISTER LOGIC
export async function registerUser(req, res) {
  try {
    //code to be executed
    const { name, email, password } = req.body;

    const userExist = await findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);

    const user = new User({
      name,
      email,
      password: hashedPassword
    });

    await user.save();

    res.status(201).json({ message: "User Registered Successfully" });

  } 
    // execute error message if any error occure
  catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Login Logic
export async function loginUser(req, res) {
  try {
    //code to be executed 
    const { email, password } = req.body;

    const user = await findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid Email or Password" });
    }

    const isMatch = await compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Email or Password" });
    }

    const token = sign({ id: user._id }, "secretkey", {
      expiresIn: "1d"
    });

    res.json({
      message: "Login Successful",
      token
    });

  }
  // if code does not executed than error message executed
  
  catch (error) {
    res.status(500).json({ error: error.message });
  }
}

 