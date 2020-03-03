import express from "express";
import router from "./router";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "welcome to /" });
});
app.use("/api", router);

module.exports = app;
