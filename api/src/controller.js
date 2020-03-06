import data from "./mock_data/mock_res";
import bus from "./schemas/bus";
import mongoose from "mongoose";

const Bus = mongoose.model("bus", bus);

export const getBus = (req, res) => {
  const query = req.params.number;
  data.get_busses_number.bus_number = query;
  Bus.create(data.post_bus);
  return res.json(data.get_busses_number);
};

export const getManyBusses = (req, res) => {
  console.log("request body: ", req.body);
};

export const saveBusses = (req, res) => {
  console.log("request body: ", req.body);
  Bus.create(data.post_bus);
  res.json(data.post_busses_number);
};

export const findPlaces = (req, res) => {};
export const removeBus = (req, res) => {};
