import { Router } from "express";
const router = Router();
import connection from "../database/createMySQLConnection.js"

import {isAuth} from "../authorization/authorization.js";

router.get("/api/clothes", async (req, res) => {
    connection.query("SELECT clothes.id, clothes.title, clothes.price, cloth_categories.category_name FROM clothes JOIN cloth_categories ON clothes.category_fk = cloth_categories.id", function (error, results) {
        if(error) throw error;
        if(results) res.send({ data: results });
    })
});

router.get("/api/clothes/:id", (req, res) => {
    connection.query("SELECT clothes.id, clothes.title, clothes.price, cloth_categories.category_name FROM clothes JOIN cloth_categories ON clothes.category_fk = cloth_categories.id WHERE clothes.id = ?", [req.params.id], function (error, results) {
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
