import express from "express";
import router from "./router";
import bodyParser from "body-parser";
import cors from "cors"

const app = express();

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "welcome to /" });
});

app.use("/api", router);

module.exports = app;
