import data from "./mock_data/mock_res";
import BusModel from "./schemas/bus";


export const getSingleBus = async (req, res) => {
  const { number } = req.params;
  const bus = await BusModel.find({bus_number: number})
  console.log(bus)
  // return res.json(data.get_busses_number);
  return res.json(bus)
};

export const getManyBusses = async (req, res) => {
  console.log("request body: ", req.body);
  const busses = await BusModel.find()
  console.log(`loaded ${await bussesCount()} busses`)
  return res.json(busses)
};

export const saveBusses = async (req, res) => {
  const { bus_number } = req.body
  const busses = await BusModel.find({bus_number})
  console.log("checking for duplicate bus numbers ...")
  console.log(`found ${await bussesCount()} busses with the number ${bus_number}`)
  if(busses.length >= 1) return handleSendResponse(res, "bus already exists", 400, bus_number)
  const Bus = new BusModel(req.body)
  console.log(`saving to database`)
  console.log("request body: ", req.body);
  await Bus.save(Bus)
  return handleSendResponse(res, "bus saved successfully", 200, Bus.bus_number, Bus._id)
};

export const findPlaces = (req, res) => {};

export const deleteStoredBus = async (req, res) => {
  const { id } = req.params
  const bus = await BusModel.findOne({ _id: id })
  console.log(bus)
  if (!bus) return res.status(404).json({message: "could not find bus"})
  await BusModel.deleteOne({ _id: bus._id })
  const count = await bussesCount()
  console.log(`deleted 1 item from database, ${count} left`)
  return res.status(200).json({message: "deleted 1 bus from database"})
};

const bussesCount = async () => {
  const busses = await BusModel.find()
  return busses.length
}

const handleSendResponse = (res, message, code = 200, bus = "", id = "") => {
  if (!message) return "must have a message"
  if (!code) return res.json({message, bus, id})
  return res.status(code).json({message, bus, id})
}

export const getRemoteBusses = (req, res) => {}
