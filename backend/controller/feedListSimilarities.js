const axios = require("axios");
require("dotenv").config();
const { environment } = require("../environment/environment");
const {key} = environment;


// Feed List Similarities
const getSimilarities = async (req, res) => {

  const options = {
    method: 'GET',
    url: 'https://yummly2.p.rapidapi.com/feeds/list-similarities',
    params: {
      limit: '18',
      start: '0',
      id: '15-Minute-Baked-Salmon-with-Lemon-9029477',
      apiFeedType: 'moreFrom',
      authorId: 'Yummly'
    },
    headers: {
      'X-RapidAPI-Key': key,
      'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    res.send({ message: "Fetched Data From Feed-List-Smilaritties API", data: response.data.feed });
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
  getSimilarities
};
