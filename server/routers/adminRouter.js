import { Router } from "express";
const router = Router();
import bcrypt from "bcrypt";


import connection from "../database/createMySQLConnection.js"

import { authLimiter } from "../authorization/authorization.js"

// authlimiter only run on those 2
router.use(["/api/login", "/api/signup"], authLimiter)

router.post("/api/login", (req, res) => {
    connection.query("SELECT * FROM admin WHERE name = ?", [req.body.name], async function (error, results) {
        if(error) throw error;
        // if no users is found in the database
        if(results == "") return res.sendStatus(400);

        if(results) {
            const isSame = await bcrypt.compare(req.body.password, results[0].password);
            if (isSame) {
                req.session.isAuth = true;
                res.sendStatus(200);
            } 
            // if the password does not match with the user
            if (!isSame) res.sendStatus(400)
        }
    })
});

router.post("/api/signup", async (req,res) => {
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    connection.query({
        sql:"INSERT INTO admin (name, password) VALUES(?,?)",
        values: [req.body.name, hashedPassword]
    }, async (error, results) => {
        if(error) throw error;
        if(results) res.send({data: "admin succucfully signed up"})
    })           
});

router.get("/api/logout", (req, res) => {
    req.session.destroy(function(err) {
        res.send({data: "user logged out"})
    })
})


export default router;
