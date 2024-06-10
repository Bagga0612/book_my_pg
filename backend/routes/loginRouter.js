const loginController = require('../controller/loginController');
const loginForm = require("express").Router();

loginForm.post("/user-register", loginController.userRegister);
loginForm.post("/user-login", loginController.userLogin);

module.exports = loginForm;