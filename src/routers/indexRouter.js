
const express = require('express');
const router = express.Router();

const indexController = require("../controller/indexController");

// Route GET '/'
router.get('/', indexController.Homepage);
// Route GET '/about'
router.get('/about', indexController.About);
// Route GET 'Login'
router.get('/login', indexController.LoginPage);
router.post('/login', indexController.Login)

module.exports = router;
