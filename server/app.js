import express from "express";
const app = express();

app.use(express.json());

import clothesRouter from "./routers/clothesRouter.js";
app.use(clothesRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("server is running on port", PORT)
})