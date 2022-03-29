const getGames = (req, res) => {
  var axios = require('axios').default;

  var options = {
    method: 'GET',
    url: 'https://free-nba.p.rapidapi.com/games',
    params: { page: '0', per_page: '25' },
    headers: {
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
      'X-RapidAPI-Key': '03f75e5346mshe102d9b0cdcb5a0p1a7f92jsndd8d5123e45a',
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(function (error) {
      res.status(404).json({
        status: 'fail',
        message: error,
      });
    });
};

module.exports = getGames;
