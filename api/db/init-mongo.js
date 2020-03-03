const secrets = require("./secrets/secrets");
db.createUser({
  user: secrets.username,
  pwd: secrets.pwd,
  roles: [{ role: "readWrite", db: "busses" }]
});
