import { Router } from "express";
const router = Router();
import connection from "../database/createMySQLConnection.js"

import {isAuth} from "../authorization/authorization.js";

router.get("/api/clothes", async (req, res) => {
    connection.query("SELECT clothes.id, clothes.title, clothes.price, cloth_categories.category_name, clothes.imgSrc FROM clothes JOIN cloth_categories ON clothes.category_fk = cloth_categories.id", function (error, results) {
        if(error) throw error;
        if(results) res.send({ data: results });
    })
});

router.get("/api/clothes/:id", (req, res) => {
    connection.query("SELECT clothes.id, clothes.title, clothes.price, cloth_categories.category_name, clothes.imgSrc FROM clothes JOIN cloth_categories ON clothes.category_fk = cloth_categories.id WHERE clothes.id = ?", [req.params.id], function (error, results) {
        if(error) throw error;
        if(results) res.send({ data: results });
    })
});

router.put("/api/editCloth", isAuth, (req, res) => {
    console.log(req.body);
    connection.query({
        sql:"UPDATE clothes SET title = ?, price = ?, category_fk = ? WHERE id = ?",
        values: [req.body.title, req.body.price, req.body.category, req.body.id]
    }, async (error, results) => {
        if(error) throw error;
        if(results) res.sendStatus(200);
    }) 
});

router.get("/api/similarclothes/:category&&:clothid", (req, res) => {
    console.log(req.params.category);
    connection.query("SELECT clothes.id, clothes.title, clothes.price, cloth_categories.category_name, clothes.imgSrc FROM clothes JOIN cloth_categories ON clothes.category_fk = cloth_categories.id WHERE cloth_categories.category_name = ? AND NOT clothes.id = ? ORDER BY RAND() LIMIT 6", [req.params.category, req.params.clothid], function (error, results) {
        if(error) throw error;
        if(results) res.send({ carouselItemsData: results });
    })
});

router.get("/api/clothSizes", async (req, res) => {
    connection.query("SELECT * FROM cloth_sizes", function (error, results) {
        if(error) throw error;
        if(results) res.send({ clothSizesData: results });
    })
});

router.get("/api/clothCategories", async (req, res) => {
    connection.query("SELECT * FROM cloth_categories", function (error, results) {
        if(error) throw error;
        if(results) res.send({ clothCategoriesData: results });
    })
});

export default router;
