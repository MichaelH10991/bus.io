import data from "./mock_data/mock_res";
import BusModel from "./schemas/bus";


export const getSingleBus = async (req, res) => {
  const { number } = req.params;
  const bus = await BusModel.find({bus_number: number})
  console.log(bus)
  // return res.json(data.get_busses_number);
  return res.json(bus)
};

export const getManyBusses = (req, res) => {
  console.log("request body: ", req.body);
};

export const saveBusses = async (req, res) => {
  const { bus_number } = req.body
  const busses = await BusModel.find({bus_number})
  console.log(busses.length)
  if(busses.length >= 1) return {message: 'bus already exists'}
  const Bus = new BusModel(req.body)
  console.log("request body: ", req.body);
  const item = await Bus.save(Bus)
  return item;
};

export const findPlaces = (req, res) => {};
export const removeBus = (req, res) => {};
