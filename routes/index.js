const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Ad = require('../models/Ad');

router.get('/', (req, res) => {
  Ad.find()
    .then(ads => res.json(ads))
    .catch(err => res.status(404).json({ noadsfound: 'No ads found' }));
});

module.exports = router;
