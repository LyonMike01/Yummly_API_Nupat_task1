
require("dotenv").config();

const environment = {
    PORT: process.env.PORT, 
    key: process.env.API_KEY };


module.exports = { environment };