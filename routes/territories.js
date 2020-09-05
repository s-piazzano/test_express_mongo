const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>  {
    res.status(200).json({status: 'success', message: 'Hello friend  😌'});
});

module.exports = router;