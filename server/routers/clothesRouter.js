import { Router } from "express";
const router = Router();
import connection from "../database/createMySQLConnection.js"

router.get("/api/clothes", async (req, res) => {
    connection.query("SELECT * FROM clothes", function (error, results) {
        if(error) throw error;
        if(results) res.send({ data: results });
    })
});

export default router;
