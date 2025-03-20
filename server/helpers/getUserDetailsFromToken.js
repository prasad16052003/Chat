const jwt = require('jsonwebtoken');
const UserModel = require('../models/UserModel');

const getUserDetailsFromToken = async (token) => {
    if (!token) {
        return {
            message: "Session expired",
            logout: true,
        };
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY); // ✅ Fixed typo here
        const user = await UserModel.findById(decoded.id).select('-password');

        return user;
    } catch (error) {
        return {
            message: "Invalid or expired token",
            logout: true,
        };
    }
};

module.exports = getUserDetailsFromToken;