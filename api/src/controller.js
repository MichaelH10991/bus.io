import data from "./mock_data/mock_res"
import BusModel from "./schemas/bus"
import axios from "axios"

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
  const { bus_number, county } = req.body
  const busses = await BusModel.find({ bus_number, county })
  console.log("checking for duplicate bus numbers ...")
  if (busses.length >= 1) {
    console.log("bus exists")
    // there is a bug here, busses that are saved with no number
    return handleSendResponse(res, "bus already exists", 400, busses[0])
  }
  const Bus = new BusModel(req.body)
  console.log(`saving to database`)
  console.log("request body: ", req.body)
  await Bus.save(Bus)
  return handleSendResponse(res, "bus saved successfully", 200, Bus)
}

export const findPlaces = async (req, res) => {
  const lat = 51.7643203
  const lon = -2.4814856
  const url = `${process.env.TRANSPORT_API_URL}/v3/uk/places.json?lat=${lat}&lon=${lon}&type=bus_stop&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`
  const response = await axios({
    method: "get",
    url: url,
  })
  console.log(response.data.member)
  return res.status(200).json(response.data.member)
}

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
  const { atcocode } = req.params

  // const { service_number } = req.params
  const url = `${process.env.TRANSPORT_API_URL}/v3/uk/bus/stop/${atcocode}/live.json?app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&group=route`
  const response = await axios({
    method: "get",
    url: url,
  })
  console.log(response.data)
  return res.status(200).json(response.data)
  // return res.json(data.remote_busses)ss
}
