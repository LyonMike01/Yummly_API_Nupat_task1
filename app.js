const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config()
const { environment } = require("./backend/environment/environment");

const {PORT} = environment;
  

const app = express();

app.use(cors())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))


const feeds = require("./backend/Routes/routes")



// feeds list
app.use("/api", feeds)

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});