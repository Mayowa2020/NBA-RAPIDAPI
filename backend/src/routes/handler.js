const express = require('express');

const router = express.Router();
const getGames = require('../controllers/gamesController');
const getStats = require('../controllers/statsController');
const getTeams = require('../controllers/teamsController');
const getTotal = require('../controllers/totalController');

router.get('/getGames', getGames);
router.get('/getStats', getStats);
router.get('/getTeams', getTeams);
router.get('/getTotal', getTotal);

module.exports = router;
