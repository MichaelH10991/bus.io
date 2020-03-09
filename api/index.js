const app = require("./bin/app");
const Database = require('./bin/connection')
const PORT = process.env.PORT || 8080;

const db = new Database()
db._connect()
db.connection()

app.listen(
  PORT,
  console.log(`bus_api listening on https://127.0.0.1:${PORT}/api`)
);
