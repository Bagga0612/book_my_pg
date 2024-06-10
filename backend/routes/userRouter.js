const userController = require('../controller/userController');
const getUserData = require("express").Router();

getUserData.post('/getData', userController.getUserData);

module.exports = getUserData;