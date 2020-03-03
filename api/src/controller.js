import data from "./mock_data/mock_res";
import model from "./model";

export const getBusses = (req, res) => {
  const query = req.params.number;
  data.get_busses_number.bus_number = query;
  return res.json(data.get_busses_number);
};

export const getManyBusses = (req, res) => {};
export const saveBusses = (req, res) => {
  console.log("request body: ", req.body);
  res.json(data.post_busses_number);
};
export const findPlaces = (req, res) => {};
export const removeBus = (req, res) => {};
