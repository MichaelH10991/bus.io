import express from "express";
import router from "./router";
import bodyParser from "body-parser";

const app = express();

// app.use(bodyParser);

app.get("/", (req, res) => {
  res.json({ welcome: "to /" });
});

app.use("/api", router);

module.exports = app;
