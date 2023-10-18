// Create web server with express
const express = require('express');
const app = express();
const port = 3000;

// Use static file
app.use(express.static('public'));

// Use body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/comment', { useNewUrlParser: true });
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const commentSchema = new Schema({
    content: String