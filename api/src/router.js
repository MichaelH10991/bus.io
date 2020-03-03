import express from "express";
import {
  getBusses,
  getManyBusses,
  saveBus,
  findPlaces,
  removeBus
} from "./controller.js";
const router = express.Router();

router.get("/busses", (req, res) => {
  getManyBusses(req, res);
});

router.get("/busses/:number", (req, res) => {
  getBusses(req, res);
});

router.post("/busses", (req, res) => {
  res.json(data.get_busses_number);
});

router.get("/places", (req, res) => {
  res.json(data.get_busses_place);
});

router.delete("/bus/:id", (req, res) => {
  res.json({ message: `deleted bus: ${req.id}` });
});

router.get("/ping", (req, res) => {
  res.json({ version: process.env.API_VERSION });
});

export default router;
