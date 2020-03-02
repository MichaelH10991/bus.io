import express from "express";
import data from "./mock_res";
import controller from "./controller.js";
const router = express.Router();

router.get("/busses", (req, res) => {
  const query = req.query;
  data.get_busses_number.bus_number = query.bus_number;
  res.json(data.get_busses_number);
});

router.post("/busses", (req, res) => {
  res.json(data.get_busses_number);
});

router.get("/places", (req, res) => {
  res.json(data.get_busses_place);
});

router.delete("bus/:id", (req, res) => {
  res.json({ message: `deleted bus: ${req.id}` });
});

export default router;
