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

import http from "http";
const server = http.createServer(app);

import { Server } from "socket.io";
const io = new Server(server);

io.on("connection", (socket) => {

    socket.on("customerLoggedIn", ({ data }) => {
        const username = data
        io.emit("logCustomer", { username });
    });
});

import adminRouter from "./routers/adminRouter.js";
app.use(adminRouter);

import customerRouter from "./routers/customersRouter.js";
app.use(customerRouter);

import clothesRouter from "./routers/clothesRouter.js";
app.use(clothesRouter);

import cartRouter from "./routers/cartRouter.js";
app.use(cartRouter);


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log("server is running on port", PORT)
})