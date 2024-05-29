const { response } = require("express")
const User=require("../models/userModel")

const register = async (req, res) => {
    try {
        const { email, password, username } = req.body;

        if (!email) {
            return res.status(400).json({
                EM: 'Email is missing',
                EC: 1
            });
        }

        // Check if password is missing
        if (!password) {
            return res.status(400).json({
                EM: 'Password is missing',
                EC: 1
            });
        }

        // Check if username is missing
        if (!username) {
            return res.status(400).json({
                EM: 'Username is missing',
                EC: 1
            });
        }

        const user = new User({
            username,
            email,
            password
        });

        try {
            const result = await user.save();
            console.log('User saved successfully:', result);
            return res.status(200).json({
                EM: 'Registration successful',
                EC: 0,
                DT: result
            });
        } catch (error) {
            console.error('Save user failed:', error);
            return res.status(500).json({
                EM: 'Internal server error',
                EC: 2
            });
        }
    } catch (error) {
        console.error('Registration failed:', error);
        return res.status(500).json({
            EM: 'Internal server error',
            EC: 2
        });
    }
};



module.exports={
    register    
}