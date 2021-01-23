const express = require('express');
// const bodyParser = require('body-parser'); // bodyParser is not required because express includes it
const cors = require('cors');
const mongoose = require('mongoose');

// to handle environment variables
require('dotenv').config();

// This create the express server
const app = express();
const port = process.env.PORT || 5001;

//Cors middleware
app.use(cors());
//This allow to parse json, because our server is going to send and receive json
app.use(express.json()); 
//app.use(bodyParser.json()); // bodyParser is not required because express includes it


// This connect MongoDB Atlas
const uri = process.env.ATLAS_URI
mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex:true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
})


const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');


app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

// This start the server, listening in the specific port
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})