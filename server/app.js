require('dotenv').config()
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const router = require("./routers");
const errorHandler = require('./middlewares/errorHandler');

app
  .use(express.urlencoded({
    extended: true
  }))
  .use(express.json())
  .use(cors())
  .use(router)
  .use(errorHandler)
  .listen(PORT, () => {
    console.log(`SERVER SUCCESSFULLY RUNNING ON PORT : ${PORT}`);
  });