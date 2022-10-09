const express = require("express");
const app = express();
const errorHandler = require("./error_handler");
const router = require("./routes");
const cors = require("cors");
let {connectDB} = require("./config/connection");
// const runConnection = require("./config/connection");

function main() {
  require("dotenv").config();
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use(cors());

  app.use(router);
  app.use(errorHandler);
}

main();

module.exports = app;
