const axios = require("axios");
require("dotenv").config();
const { environment } = require("../environment/environment");
const {key} = environment;



const getTags = async (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://yummly2.p.rapidapi.com/tags/list',
    headers: {
      'X-RapidAPI-Key': key,
      'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);

    res.send({ message: "Fetched Data From Feed-Tags API", data: response.data.feed });
  } catch (error) {
    res.status(500).send({ message: error.message});
  }

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error.message);
    });
};

module.exports = {
getTags
};
