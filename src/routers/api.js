const userController = require("../controller/userController")
const routerApi = require("express").Router()

routerApi.post("/register", userController.register)

module.exports = routerApi