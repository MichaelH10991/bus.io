import mongoose from 'mongoose'
import "regenerator-runtime/runtime";
const db = mongoose.connection
const url = process.env.MONGO_CONNECT_URL;
const database = process.env.MONGO_INITDB_DATABASE;
const connection_url = `${url}/${database}`
//https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/

class Database {
    // starts the connection
    constructor(){
        // this._connect()
    }

async _connect() {
    if (connection_url) {
      try{
          console.log(`Starting connection to ${connection_url} database ...`);
            await mongoose.connect(connection_url, {
              useNewUrlParser: true,
              useUnifiedTopology: true
            });
          }catch(e){
              console.log('other error:', e)
          }
      } else {
        console.log(
          "Mongoose connection not created because connection url has not been set"
        );
      }
}
connection() {
    try{
      db.on('error', console.error.bind(console, 'connection error:'))
      db.once('open', () => {
      console.log(`bus_api connected to ${connection_url} database`);
    })
    }catch(e){
      console.log('connection error: ', e)
    }
}
}

module.exports = Database