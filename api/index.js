const app = require("./bin/app");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;
const connection_url = process.env.MONGO_CONNECT_URL;
const database = process.env.MONGO_DATABASE;

if (connection_url) {
  (async () => {
    console.log(`Starting connection to ${database} database`);
    try {
      await mongoose.connect(connection_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
    } catch (error) {
      console.log(error);
    }
    console.log(`bus_api connected to ${database} database.`);
  })();
} else {
  console.log(
    "Mongoose connection not created because connection url has not been set."
  );
}

app.listen(
  PORT,
  console.log(`bus_api accepting requests from https://localhost:${PORT}/api`)
);
