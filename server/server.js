const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const createad = require('./routes/createad');

const app = express();
const port = 3000;


// Set static folder (this is where angular stuff goes)
app.use(express.static(path.join(__dirname, 'client')));

// Body parser middleware
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({extended: false}));

// DB Config
const db = require('./keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use(function (req, res, next) {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "http://localhost:4200"
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, DELETE, PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
})

app.use('/createad', createad);
app.use('/', index);

app.listen(port, () => {
  console.log('Server running on port ' + port);
});
