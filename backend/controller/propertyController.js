const db = require("../connection/dbConnection");

const city = (req, res) => {
    console.log("kkkk", req.body);

    const city = db.query(`SELECT * FROM cities WHERE city="${req.body.city}";`, (err, result) => {
        if (err) {
            res.send({
                status: "error", error: err
            })
        } else {
            if (result.length === 0) {
                res.send({
                    status: "dont_have_pg"
                })
            } else {
                res.send({
                    status: "have_pg",
                    data: result
                })

            }

        }
    })
};

const getCity = (req, res) => {

    console.log(req.body)
    const getCity = db.query(`SELECT * FROM cities WHERE id="${req.body.c_id}";`, (err, result) => {
        if (err) {
            res.send({
                status: "error"
            })
        } else {
            res.send({
                status: "success",
                data: result
            })
        }
    })
};

const getProperties = (req, res) => {
    // const getCity = db.query(`SELECT * FROM `)
    console.log("rrrr", req.body)

    const getProperties = db.query(`SELECT * FROM properties WHERE city_id="${req.body.c_id}";`, (err, result) => {
        if (err) {
            res.send({
                status: "error"
            })
        } else {
            if (result.length === 0) {
                res.send({
                    status: "dont_have_properties"
                })
            }
            res.send({
                status: "get_properties",
                data: result
            })
        }

    })
};


const getPropertyDetail = (req, res) => {
    console.log("property", req.body)
    const getPropertydetail = db.query(`SELECT * FROM properties WHERE id="${req.body.p_id}";`, (err, result) => {
        if (err) {
            res.send({
                status: "error"
            })
        }
        else {
            res.send({
                status: "get_property_detail",
                data: result
            })
        }

    })
};

const reserveProperty = (req, res) => {
    console.log("qqqqq", req.body);

    const checkReserved = db.query(`SELECT * FROM reserve_properties WHERE user_id="${req.body.u_id}" AND property_id="${req.body.p_id}";`, (err, result) => {
        if (err) {
            res.send({
                status: "error", error: err,
            })
        } else {
            if (result.length > 0) {
                res.send({ status: "already_reserved" })
            } else {
                const getReservedProperty = db.query(`INSERT INTO reserve_properties (user_id, property_id) VALUES ("${req.body.u_id}", "${req.body.p_id}");`, (err, result) => {
                    if (err) {
                        res.send({
                            status: "error", error: err,
                        })
                    } else {
                        res.send({ status: "successfully_reserved", })
                    }
                })
            }
        }
    })
};


const getReserveProperty = (req, res) => {
    console.log("tttttt", req.body);
    const get_r_p = db.query(`SELECT property_id FROM reserve_properties WHERE user_id = "${req.body.u_id}"`, (err, result) => {
        if (err) {
            res.send({
                status: "error", error: err,
            })
        } else {
            // res.send()

            console.log("dataa", result)
            console.log("dataa", result.length)

            let realArr = [];


            console.log("LENGTH____",result.length)

            if (result.length > 0) {
                for (var i = 0; i < result.length; i++) {
                    let getPropertyId = result[i].property_id;
                    const get_re_p = db.query(`SELECT * FROM properties WHERE id=${getPropertyId}`, (err, result1) => {
                        if (err) {
                            res.send({
                                status: "error", error: err,
                            })
                        }
                        else {

                            console.log("from a single id -- ==", result1[0])
                            realArr.push({
                                id: getPropertyId,
                                data: result1[0]
                            })
                        }
                    })
                }
            }
            
            console.log("Complete arr", realArr)
            res.send({ status: "get_data", data: realArr  })



        }
    })
};







module.exports = {
    city,
    getCity,
    getProperties,
    getPropertyDetail,
    reserveProperty,
    getReserveProperty
}