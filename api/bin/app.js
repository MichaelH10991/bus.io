"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _router = require("./router");

var _router2 = _interopRequireDefault(_router);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// app.use(bodyParser);

app.get("/", function (req, res) {
  res.json({ welcome: "to /" });
});

app.use("/api", _router2.default);

module.exports = app;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanMiXSwibmFtZXMiOlsiYXBwIiwiZ2V0IiwicmVxIiwicmVzIiwianNvbiIsIndlbGNvbWUiLCJ1c2UiLCJyb3V0ZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsTUFBTSx3QkFBWjs7QUFFQTs7QUFFQUEsSUFBSUMsR0FBSixDQUFRLEdBQVIsRUFBYSxVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUN6QkEsTUFBSUMsSUFBSixDQUFTLEVBQUVDLFNBQVMsTUFBWCxFQUFUO0FBQ0QsQ0FGRDs7QUFJQUwsSUFBSU0sR0FBSixDQUFRLE1BQVIsRUFBZ0JDLGdCQUFoQjs7QUFFQUMsT0FBT0MsT0FBUCxHQUFpQlQsR0FBakIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCByb3V0ZXIgZnJvbSBcIi4vcm91dGVyXCI7XG5pbXBvcnQgYm9keVBhcnNlciBmcm9tIFwiYm9keS1wYXJzZXJcIjtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG4vLyBhcHAudXNlKGJvZHlQYXJzZXIpO1xuXG5hcHAuZ2V0KFwiL1wiLCAocmVxLCByZXMpID0+IHtcbiAgcmVzLmpzb24oeyB3ZWxjb21lOiBcInRvIC9cIiB9KTtcbn0pO1xuXG5hcHAudXNlKFwiL2FwaVwiLCByb3V0ZXIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFwcDtcbiJdfQ==