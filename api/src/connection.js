import mongoose from 'mongoose'
import "regenerator-runtime/runtime";
const url = process.env.MONGO_CONNECT_URL;
const database = process.env.MONGO_DATABASE;
// const connection_url = `${url}/${database}`
const connection_url = "mongodb://master:Copella123!@localhost:27017/busses"
//https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/

class Database {

    constructor(){
        this._connect()
    }

async _connect() {
    if (url) {
      try{
          console.log(`Starting connection to ${connection_url} database...`);
            await mongoose.connect(connection_url, {
              useNewUrlParser: true,
              useUnifiedTopology: false
            });
            const db = mongoose.connection
            await db.on('error', console.error.bind(console, 'connection error:'))
            await db.once('open', () => {
              console.log(`bus_api connected to ${connection_url} database.`);
            })
          }catch(e){
              console.log(e)
          }
      } else {
        console.log(
          "Mongoose connection not created because connection url has not been set."
        );
      }
}
}

module.exports = Database