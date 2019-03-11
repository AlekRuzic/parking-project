const express = require("express");
const router = express.Router();
const Ad = require('../models/Ad');

router.post('/', (req, res) => {
  //console.log(req.body);
  const newAd = new Ad({
    address: req.body.address,
    price: req.body.price,
    description: req.body.description,
    image: req.body.image
  });

  newAd.save().then(post => res.json(post));
})

router.get("/", (req, res) => {
  console.log("get requrest");
  // const newAd = new Ad({
  //   address: req.body.address,
  //   price: req.body.price,
  //   description: req.body.description,
  //   image: req.body.image
  // });

  // newPost.save().then(post => res.json(post));
});

module.exports = router;
