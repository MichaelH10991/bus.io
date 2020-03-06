const app = require("./bin/app");
const Database = require('./bin/connection')
const PORT = process.env.PORT || 8080;

new Database()

app.listen(
  PORT,
  console.log(`bus_api accepting requests from https://localhost:${PORT}/api`)
);
