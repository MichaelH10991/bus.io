import express from "express";
import {
  getBusses,
  getManyBusses,
  saveBusses,
  findPlaces,
  removeBus
} from "./controller.js";
const router = express.Router();

router.get("/busses", (req, res) => {
  console.log(`GET: /busses`);
  getManyBusses(req, res);
});

router.get("/busses/:number", (req, res) => {
  console.log(`GET: /busses/${req.params.number}`);
  getBusses(req, res);
});

router.post("/busses", (req, res) => {
  console.log(`POST: /busses`);
  saveBusses(req, res);
});

router.get("/places", (req, res) => {
  console.log(`GET: /places`);
  res.json(data.get_busses_place);
});

router.delete("/bus/:id", (req, res) => {
  console.log(`DELETE: /bus/${req.params.id}`);
  res.json({ message: `deleted bus: ${req.params.id}` });
});

router.get("/ping", (req, res) => {
  console.log(`GET: /ping`);
  res.json({ version: process.env.API_VERSION });
});

export default router;
