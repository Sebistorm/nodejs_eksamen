import { Router } from "express";
const router = Router();
import connection from "../database/createMySQLConnection.js"

import {isAuth} from "../authorization/authorization.js";

router.get("/api/clothes", async (req, res) => {
    connection.query("SELECT * FROM clothes", function (error, results) {
        if(error) throw error;
        if(results) res.send({ data: results });
    })
});

router.get("/api/clothes/:id", (req, res) => {
    connection.query("SELECT * FROM clothes WHERE id = ?", [req.params.id], function (error, results) {
        if(error) throw error;
        if(results) res.send({ data: results });
    })
});

router.put("/api/editCloth", isAuth, (req, res) => {
    connection.query({
        sql:"UPDATE clothes SET title = ?, price = ?, category = ? WHERE id = ?",
        values: [req.body.title, req.body.price, req.body.category, req.body.id]
    }, async (error, results) => {
        if(error) throw error;
        if(results) res.sendStatus(200);
    }) 
})

export default router;
