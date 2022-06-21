import { Router } from "express";
const router = Router();
import bcrypt from "bcrypt";


import connection from "../database/createMySQLConnection.js"

import { authLimiter } from "../authorization/authorization.js"


// authlimiter only run on those 2
router.use(["/api/customerLogin", "/api/customerSignup"], authLimiter)

router.post("/api/customerLogin", (req, res) => {
    connection.query("SELECT * FROM customers WHERE email = ?", [req.body.email], async function (error, results) {
        if(error) throw error;
        // if no users is found in the database
        if(results == "") return res.sendStatus(400);

        if(results) {
            const isSame = await bcrypt.compare(req.body.password, results[0].password);
            if (isSame) {
                console.log("succes")
                console.log(results[0].name);
                res.send({ customerName: results[0].name ,customerID: results[0].id });
            } 
            // if the password does not match with the user
            if (!isSame) res.sendStatus(400)
        }
    });
});

router.post("/api/customerSignup", async (req,res) => {
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    connection.query({
        sql:"INSERT INTO customers (name, email, password) VALUES(?,?,?)",
        values: [req.body.name, req.body.email, hashedPassword]
    }, async (error, results) => {
        if(error) {
            if(error.code == "ER_DUP_ENTRY") {
                return res.sendStatus(500)
            }
            throw error;
        }
        if(results) {
            res.send({data: "customer succucfully signed up"});
        } 
    });           
});

router.get("/api/customerInfo/:id", (req, res) => {
    console.log(req.params.id);
    
    connection.query("SELECT email, name FROM customers WHERE id = ?", [req.params.id], function (error, results) {
        if(error) throw error;
        if(results) res.send({ data: results });
    })
});

router.get("/api/deleteCustomer/:id", (req, res) => {
    connection.query("DELETE FROM customers WHERE id = ?", [req.params.id], function (error, results){
        if (error) throw error;
        if (results) res.send({ status: 200 });; 
    });
})



export default router;
