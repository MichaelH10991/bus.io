db.createUser({
  user: "michael",
  pwd: "Copella123!",
  roles: [{ role: "readWrite", db: "busses" }]
});
