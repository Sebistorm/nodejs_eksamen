import { Router } from "express";
const router = Router();
import connection from "../database/createMySQLConnection.js"

router.post("/api/addToCart", async (req, res) => {   
    connection.query({
        sql:"INSERT INTO cart (cloth_fk, customer_fk, clothSize_fk) VALUES(?,?,?)",
        values: [req.body.cloth_fk, req.body.customer_fk, req.body.clothSize_fk]
    }, async (error, results) => {
        if(error) {
            throw error;
        }
        if(results) {
            res.sendStatus(200);
        } 
    });
});

router.get("/api/cart/:customerID", (req, res) => {
    connection.query("SELECT clothes.title, clothes.price, cloth_sizes.size, cloth_categories.category_name, clothes.imgSrc FROM kalvin_clein.cart JOIN clothes ON cart.cloth_fk = clothes.id JOIN cloth_sizes ON cart.clothSize_fk = cloth_sizes.id JOIN cloth_categories ON clothes.category_fk = cloth_categories.id WHERE cart.customer_fk = ?", [req.params.customerID], function (error, results) {
        if(error) throw error;
        if(results) res.send({ data: results });
    })
});

export default router;