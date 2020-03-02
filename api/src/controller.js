import data from "./mock_res";

export const getBusses = (req, res) => {
  const query = req.query;
  data.get_busses_number.bus_number = query.bus_number;
  return res.json(data.get_busses_number);
};

export const getManyBusses = (req, res) => {};
export const saveBus = (req, res) => {};
export const findPlaces = (req, res) => {};
export const removeBus = (req, res) => {};
