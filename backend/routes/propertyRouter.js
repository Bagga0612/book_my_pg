const propertyController = require("../controller/propertyController");
const property =require("express").Router();

property.post('/city', propertyController.city);
property.post('/getProperties', propertyController.getProperties);
property.post('/getCity',propertyController.getCity);
property.post('/getPropertyDetail', propertyController.getPropertyDetail);
property.post('/reverseProperty', propertyController.reserveProperty);
property.post('/getReverseProperty', propertyController.getReserveProperty);



module.exports = property;