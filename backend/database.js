const mongoose = require('mongoose');
require('dotenv').config;

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ Database Connected successfully')
    } catch (error) {
        console.log('❌ Failed to connect with database '+error.message);
    }
}

module.exports=connectDB;