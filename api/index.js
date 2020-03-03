const app = require("./bin/app");
const PORT = 8080;
const mongoose = require("mongoose");

if (process.env.MONGO_CONNECT_URL) {
  (async function() {
    await mongoose.connect(process.env.MONGO_CONNECT_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  });
} else {
  console.log(
    "Mongoose connection not created because connection url has not been set."
  );
}

app.listen(
  PORT,
  console.log(`bus_api accepting requests from https://localhost:${PORT}`)
);
