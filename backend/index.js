const express = require('express');
const { errorHandler } = require('./src/middleware/errorMiddleware');
const morgan = require('morgan');
const routesHandler = require('./src/routes/handler');
const Agenda = require('agenda');
const cors = require('cors');

const ResultModel = require('./src/models/ResultModel');

const app = express();

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.use(cors());
app.use(express.json());
app.use('/api', routesHandler);
app.use('*', (req, res) => res.status(404).json({ error: 'not found' }));
app.use(errorHandler);

module.exports = app;

const mongoConnectionString = 'mongodb://127.0.0.1/agenda';

const agenda = new Agenda({
  db: { address: mongoConnectionString, collection: 'agendaJobs' },
});

var teamId = 1;
var teamStatsMap = {};

agenda.define('get team results', async (job) => {
  // console.log('***********', teamId);
  if (teamId >= 30) {
    console.log(JSON.stringify(teamStatsMap));
    return;
  }

  var axios = require('axios').default;

  var options = {
    method: 'GET',
    url: 'https://free-nba.p.rapidapi.com/stats',
    params: { page: '0', per_page: '100' },
    headers: {
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
      'X-RapidAPI-Key': '03f75e5346mshe102d9b0cdcb5a0p1a7f92jsndd8d5123e45a',
    },
  };

  axios.request(options).then(function (response) {
    console.log(response.data.data, response.data.data.length);
    var stats = response.data.data;

    // var teamStats = stats.filter((stat) => {
    //   return stat.game.home_team_id === teamId || stat.game.visitor_team_id === teamId;
    // });

    for (var i = 0; i < stats.length; i++) {
      const stat = stats[i];

      ResultModel.findOne({ gameId: stat.game.id }, (err, data) => {
        console.log(data, 'AVOID DUPLICATE');
        if (data != null) {
          if (data.game.id != stat.game.id) {
            const teamStat = {
              gameId: stat.game.id,
              homeTeamId: stat.game.home_team_id,
              homeTeamScore: stat.game.home_team_score,
              visitorTeamId: stat.game.visitor_team_id,
              visitorTeamScore: stat.game.visitor_team_score,
              gameDate: stat.game.date,
            };
            console.log('save', i);
            ResultModel.create(teamStat);
          } else {
            return 'data already exists';
          }
        }
      });
    }

    teamId++;
  });
});

(async function () {
  // IIFE to give access to async/await
  await agenda.start();

  await agenda.every('10 seconds', 'get team results');
})();
