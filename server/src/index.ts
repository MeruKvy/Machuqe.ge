import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import mongoose from "mongoose";
import router from "./router";
import corsMiddleware from "./middlewares/corsMiddleware";

const app = express();

app.use(corsMiddleware);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
  console.log("server running on http://localhost:8080/");
});

const MONGO_URL =
  "mongodb+srv://Merkviladze:G7jsk7v9o8nbmhfo@cluster0.zjslaev.mongodb.net/machuqe?retryWrites=true&w=majority";

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error: Error) => console.log(error));

app.use("/", router());
