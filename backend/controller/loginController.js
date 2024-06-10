const db = require("../connection/dbConnection");

const userRegister = async (req, res) => {
    const checkEmail = db.query(`SELECT * FROM users WHERE email="${req.body.email}";`, (err, result) => {
        if (err) {
            res.send({
                status: "error", error: err,
            })
        } else {
            if (result.length > 0) {
                res.send({ status: "already_exist" })
            } else {

                const insertData = db.query(`INSERT INTO users (name, email, password) VALUES ("${req.body.name}", "${req.body.email}", "${req.body.password}")`, (err, result) => {
                    if (err) {
                        res.send({
                            status: "error", error: err,
                        })
                    } else {
                        res.send({ status: "successfully_registered", })
                    }
                })
            }
        }
    })
};


const userLogin = async (req, res) => {

    console.log("rrr", req.body)


    const checkEmail = db.query(`SELECT * FROM users WHERE email="${req.body.email}";`, (err, result) => {
        if (err) {
            res.send({
                status: "error", error: err,
            })
        } else {
            if (result.length === 0) {
                res.send({ status: "not_registered_email" })
            }
            else {
                const checkEmail = db.query(`SELECT * FROM users WHERE password="${req.body.password}";`, (err, result) => {
                    if (err) {
                        res.send({
                            status: "error", error: err,
                        })
                    }
                    else {
                        if (result.length === 0) {
                            res.send({ status: "invalid_password" })
                        }
                        else {
                            res.send({
                                status: "Login_successfully",
                                data: result
                            })
                        }
                    }
                })
            }

        }

    })







    // const getData = db.query("SELECT * FROM loginData",  (err, result) => {
    //     if(err){
    //         res.send({
    //             status: "error",
    //             error: err,
    //         })
    //     }
    //     res.send({
    //         status: "success",
    //         data: result
    //     })
    // })


};




module.exports = {
    userRegister,
    userLogin
}