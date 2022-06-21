import express from "express";
const app = express();

app.use(express.json());

import helmet from "helmet";
app.use('/api', helmet());

import path from "path";
app.use(express.static(path.resolve("../client/public")));

import session from "express-session"
app.use(session({
    secret: 'den firkantet lave hund',
    resave: false,
    saveUninitialized: false
}));

import { isAuth } from "./authorization/authorization.js"



import adminRouter from "./routers/adminRouter.js";
app.use(adminRouter);

import customerRouter from "./routers/customersRouter.js";
app.use(customerRouter);

import clothesRouter from "./routers/clothesRouter.js";
app.use(clothesRouter);

import cartRouter from "./routers/cartRouter.js";
app.use(cartRouter);
 

app.get("/secret", isAuth, (req,res) => {
    res.send({data: "very secret data"});
})

app.get("/error", (req,res) => {
    res.send({data: "not auth"});
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("server is running on port", PORT)
})