import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const bus = new Schema({
  bus_id: ObjectId,
  bus_number: Number,
  country: String,
  county: String,
  date_created: { type: Date, default: Date.now }
});

mongoose.model("bus", bus);

export default bus;
