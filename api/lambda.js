const awsServerlessExpress = require("aws-serverless-express")
const app = require("./bin/app")
const server = awsServerlessExpress.createServer(app)
const Database = require("./bin/connection")
const db = new Database()

db.connection()

exports.handler = (event, context) => {
  awsServerlessExpress.proxy(server, event, context)
}
