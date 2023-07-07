const express = require('express');
const routes = require('./routes');
const cors = require("cors");
const cookieParser = require('cookie-parser')

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(routes);
app.set('view engine', 'ejs');

module.exports = app;
