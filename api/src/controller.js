import data from "./mock_data/mock_res";
import BusModel from "./schemas/bus";
import mongoose from "mongoose";

export const getBus = (req, res) => {
  const query = req.params.number;
  // data.get_busses_number.bus_number = query;
  const bus = new BusModel(data)
  bus.save(bus)
  .then(doc => console.log(doc))
  .catch(e => console.log(e))
  // return res.json(data.get_busses_number);
  return res.json(bus)
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
