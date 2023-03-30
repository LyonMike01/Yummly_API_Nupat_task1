const axios = require("axios");
const { environment } = require("../environment/environment");
const {key} = environment;


const feedList = async (req, res) => {

  try {
    
  const options = {
    method: 'GET',
    url: 'https://yummly2.p.rapidapi.com/feeds/list',
    params: {limit: '24', start: '0'},
    headers: {
      'X-RapidAPI-Key': key,
      'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
    }
  };
  
    const response = await axios.request(options);
    res.send({ message: "Fetched Data From Feed List API", data: response.data });
  } catch (error) {
    res.status(500).send({ message: error.message});
  }
  
};

module.exports = {
  feedList
};
