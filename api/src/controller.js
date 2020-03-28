import data from "./mock_data/mock_res"
import BusModel from "./schemas/bus"
<<<<<<< HEAD
=======
import axios from "axios"
>>>>>>> 4895bf9... updating controller and mock_data

export const getSingleBus = async (req, res) => {
  const { number } = req.params
  const bus = await BusModel.find({ bus_number: number })
  console.log(bus)
  // return res.json(data.get_busses_number);
  return res.json(bus)
}

export const getManyBusses = async (req, res) => {
  console.log("request body: ", req.body)
  const busses = await BusModel.find()
  console.log(`loaded ${await bussesCount()} busses`)
  return res.json(busses)
}

export const saveBusses = async (req, res) => {
<<<<<<< HEAD
  const { bus_number } = req.body
  const busses = await BusModel.find({ bus_number })
=======
  const { bus_number, county } = req.body
  const busses = await BusModel.find({ bus_number, county })
>>>>>>> 4895bf9... updating controller and mock_data
  console.log("checking for duplicate bus numbers ...")
  if (busses.length >= 1) {
    console.log("bus exists")
    // there is a bug here, busses that are saved with no number
<<<<<<< HEAD
    return handleSendResponse(res, "bus already exists", 400, bus_number)
=======
    return handleSendResponse(res, "bus already exists", 400, busses[0])
>>>>>>> 4895bf9... updating controller and mock_data
  }
  const Bus = new BusModel(req.body)
  console.log(`saving to database`)
  console.log("request body: ", req.body)
  await Bus.save(Bus)
<<<<<<< HEAD
  return handleSendResponse(res, "bus saved successfully", 200, Bus.bus_number, Bus._id)
}

export const findPlaces = (req, res) => {}
=======
  return handleSendResponse(res, "bus saved successfully", 200, Bus)
}

export const findPlaces = (req, res) => {
  const url = `${process.env.TRANSPORT_API_URL}/v3/uk/places.json?lat=51.534121&lon=-0.006944&type=bus_stop&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`
  // http://transportapi.com/v3/uk/places.json?lat=51.534121&lon=-0.006944&type=bus_stop
}
>>>>>>> 4895bf9... updating controller and mock_data

export const deleteStoredBus = async (req, res) => {
  const { id } = req.params
  const bus = await BusModel.findOne({ _id: id })
  console.log(bus)
  if (!bus) return res.status(404).json({ message: "could not find bus" })
  await BusModel.deleteOne({ _id: bus._id })
  const count = await bussesCount()
  console.log(`deleted 1 item from database, ${count} left`)
  return res.status(200).json({ message: "deleted 1 bus from database" })
}

const bussesCount = async () => {
  const busses = await BusModel.find()
  return busses.length
}

const handleSendResponse = (res, message, code = 200, bus) => {
  if (!message) throw new Error("must have a message")
  if (bus) {
    const { _id, bus_number, county } = bus
    console.log(bus)
    if (!code) return res.json({ message, _id, bus_number, county })
    return res.status(code).json({ message, _id, bus_number, county })
  }
  throw new Error("must provide a bus")
}

export const getRemoteBusses = async (req, res) => {
  // const { service_number } = req.params
  // const url = `${process.env.TRANSPORT_API_URL}/v3/uk/bus/services/SCGL:${service_number}.json?app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`
  // const response = await axios({
  //   method: "get",
  //   url: url
  // })
  // return res.json(response.data)
  return res.json(data.remote_busses)
}
