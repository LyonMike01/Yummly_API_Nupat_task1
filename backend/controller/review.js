const axios = require("axios");
require("dotenv").config();
const { environment } = require("../environment/environment");
const {key} = environment;


const getReviews = async (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://yummly2.p.rapidapi.com/reviews/list',
    params: {offset: '0', globalId: 'a8d6747a-bfaa-46a7-92fb-892e3f76b264', limit: '20'},
    headers: {
      'X-RapidAPI-Key': key,
      'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    res.send({ message: "Fetched Data From Review-List API", data: response.data.feed });
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
  getReviews
};
