const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI); // No extra options needed

        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);

        // Handle connection errors after connection is established
        mongoose.connection.on('error', (err) => {
            console.error('❌ MongoDB Connection Error:', err);
        });
    } catch (error) {
        console.error('❌ Error connecting to MongoDB:', error);
        process.exit(1); // Exit process if DB connection fails
    }
};

module.exports = connectDB;