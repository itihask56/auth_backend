const User = require("../models/User");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate user input
    if (!name) return res.status(400).json({ message: "Name is missing" });
    if (!email) return res.status(400).json({ message: "Email is missing" });
    if (!password)
      return res.status(400).json({ message: "Password is missing" });

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(409).json({ message: "User already exists" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    await User.create({ name, email, password: hashedPassword });

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Failed to create user" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //validate user details
    const user = await User.findOne({ email });
    // console.log(isUserExist);

    if (!user) {
      return res.status(400).json({ message: "User is not registered" });
    }
    const isPasswordMatch = await bcrypt.compare(password,user.password);
    if(!isPasswordMatch){
        return res.json({message:"Entered wrong password"});
    }

    res.status(200).json({message:"Logged In successfully"});

  } catch (error) {
    console.log("Failed to login "+error.message);
    
  }
};

module.exports = { register, login };
