const mysql = require("mysql");

const db = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
    
});

db.connect(() => {
    try {
        console.log("Connected :)");
    } catch (err) {
        console.log(err);
    }
})

module.exports = db;


// this is the .env part -- so it has to be neglect

// password=randeep123
// user=root
// database=trialFormData
// host=localhost
// Access_Token_Secret=webframez160055
// PORT=8000