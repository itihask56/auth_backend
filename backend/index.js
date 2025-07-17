const express = require("express");
const cors = require("cors"); // ✅ import cors
const connectDB = require("./database");
const authRoutes = require("./routes/authRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4040;

// ✅ Use cors BEFORE your routes
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/auth", authRoutes);

// Test route
app.get("/", (req, res) => {
  res.send({ message: "Server is running fine" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
