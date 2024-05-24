// import json-server
const jsonServer = require("json-server");
// create server for media player app
const BKServer = jsonServer.create();
// create a middleware
const middleware = jsonServer.defaults();
// Define route for json server
const route = jsonServer.router("db.json");
// set up port for running server app
const PORT = 3000 || process.env.PORT;

BKServer.use(middleware);
BKServer.use(route);
BKServer.listen(PORT, () => {
  console.log(
    `Media Player Server Started at port ${PORT} and waiting for client request`
  );
});
