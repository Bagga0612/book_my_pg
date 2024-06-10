
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(bodyParser.json());

const loginForm = require("./routes/loginRouter")
const property = require("./routes/propertyRouter");
const getUserData = require("./routes/userRouter");
// all other routing should be attached here


app.listen(port, () => console.log("Listening ON PORT: ", port));


app.use('/', loginForm);
app.use('/property',property);
app.use('/user', getUserData);
// and their routing url are here


