const axios = require("axios");
const { environment } = require("../environment/environment");
const {key} = environment;

  

// Feed List Similarities
const getSimilarities = async (req, res) => {

  try {
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
  
    const response = await axios.request(options);
    res.send({ message: "Fetched Data From Feed-List-Smilaritties API", data: response.data.feed });
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: error.message});
};

}

module.exports = {
  getSimilarities
};
