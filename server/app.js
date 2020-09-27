const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const router = require("./routers");

app
  .use(express.urlencoded({
    extended: true
  }))
  .use(express.json())
  .use(cors())
  .use(router)
  .listen(PORT, () => {
    console.log(`SERVER SUCCESSFULLY RUNNING ON PORT : ${PORT}`);
  });