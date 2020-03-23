const app = require("./bin/app");
const Database = require('./bin/connection')
const PORT = process.env.PORT || 8080;
const db = new Database()

db.connection()

app.listen(
  PORT,
  console.log(`bus_api listening on http://localhost:${PORT}/api`)
);
