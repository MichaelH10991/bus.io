"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _router = require("./router");

var _router2 = _interopRequireDefault(_router);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default);

app.get("/", function (req, res) {
  res.json({ welcome: "to /" });
});

app.use("/api", _router2.default);

module.exports = app;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanMiXSwibmFtZXMiOlsiYXBwIiwidXNlIiwiYm9keVBhcnNlciIsImdldCIsInJlcSIsInJlcyIsImpzb24iLCJ3ZWxjb21lIiwicm91dGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLE1BQU0sd0JBQVo7O0FBRUFBLElBQUlDLEdBQUosQ0FBUUMsb0JBQVI7O0FBRUFGLElBQUlHLEdBQUosQ0FBUSxHQUFSLEVBQWEsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDekJBLE1BQUlDLElBQUosQ0FBUyxFQUFFQyxTQUFTLE1BQVgsRUFBVDtBQUNELENBRkQ7O0FBSUFQLElBQUlDLEdBQUosQ0FBUSxNQUFSLEVBQWdCTyxnQkFBaEI7O0FBRUFDLE9BQU9DLE9BQVAsR0FBaUJWLEdBQWpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgcm91dGVyIGZyb20gXCIuL3JvdXRlclwiO1xuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSBcImJvZHktcGFyc2VyXCI7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZShib2R5UGFyc2VyKTtcblxuYXBwLmdldChcIi9cIiwgKHJlcSwgcmVzKSA9PiB7XG4gIHJlcy5qc29uKHsgd2VsY29tZTogXCJ0byAvXCIgfSk7XG59KTtcblxuYXBwLnVzZShcIi9hcGlcIiwgcm91dGVyKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhcHA7XG4iXX0=