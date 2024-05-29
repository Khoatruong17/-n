const express = require('express');
const router = express.Router();

const adminController = require("../controller/adminController");

// Route GET 'Login'
router.get('/login', adminController.LoginPage);
//router.post('/login', adminController.Login)

module.exports = router;