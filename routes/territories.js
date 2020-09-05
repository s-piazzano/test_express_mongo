const express = require('express');
const router = express.Router();
const {getTerrs} = require('../controllers/territories');

router
    .route('/')
    .get(getTerrs);

module.exports = router;