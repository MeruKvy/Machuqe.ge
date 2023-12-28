import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import mongoose from "mongoose";
import router from "./router";
import corsMiddleware from "./middlewares/corsMiddleware";
const dotenv = require('dotenv').config();

const app = express();

app.use(corsMiddleware);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

const PORT = process.env.PORT || 8080

server.listen(PORT, () => {
  console.log("server running on port " + PORT);
});



mongoose.Promise = Promise;
mongoose.connect(process.env.MONGO_URL);
mongoose.connection.on("error", (error: Error) => console.log(error));

app.use("/", router());
