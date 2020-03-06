import mongoose from 'mongoose'
import "regenerator-runtime/runtime";
const url = process.env.MONGO_CONNECT_URL;
const database = process.env.MONGO_DATABASE;
const connection_url = `${url}/${database}`
console.log(connection_url)
//https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/

class Database {

    constructor(){
        this._connect()
    }

async _connect() {
    if (url) {
          console.log(`Starting connection to ${connection_url} database...`);
          try {
            await mongoose.connect(connection_url, {
              useNewUrlParser: true,
              useUnifiedTopology: true
            });
            const db = mongoose.connection
            await db.on('error', console.error.bind(console, 'connection error:'))
            await db.once('open', () => {
              console.log(`bus_api connected to ${connection_url} database.`);
            })
          } catch (error) {
            console.log('other error: ', error);
          }
          
      } else {
        console.log(
          "Mongoose connection not created because connection url has not been set."
        );
      }
    
}
}

module.exports = Database