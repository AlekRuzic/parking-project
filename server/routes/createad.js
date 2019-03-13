const express = require("express");
const router = express.Router();
const Ad = require('../models/Ad');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, './uploads/')
  },
  filename: function(req, file, callback) {
    callback(null, new Date().toISOString() + file.originalname)
  }
});

const fileFilter  = (req, file, callback) => {
  if (file.mimetype === 'image/jpeg'
  || file.mimetype === 'image/png'
  || file.mimetype === 'image/jpg') {
    // Accept file
    callback(null, true);
  } else {
    // Reject file
    callback(null, false);
  }
};

const imageUpload = multer({
  storage: storage,
  limits: {
    filesize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter
});

router.post('/', imageUpload.single('image') , (req, res) => {
  //req.file object becomes available due to the multer middleware we added
  console.log(req.file);
  const newAd = new Ad({
    address: req.body.address,
    price: req.body.price,
    description: req.body.description,
    image: req.file.path
  });

  newAd.save().then(post => res.json(post));
})

module.exports = router;
