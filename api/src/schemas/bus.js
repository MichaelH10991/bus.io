import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const busSchema = new Schema({
  bus_id: ObjectId,
  bus_number: Number,
  country: String,
  county: String,
  date_created: { type: Date, default: Date.now }
});

export default mongoose.model("bus", busSchema);
