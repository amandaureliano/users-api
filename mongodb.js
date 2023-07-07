const mongoose = require('mongoose');

mongoose.connect(`${process.env.MONGODB_HOST}/${process.env.MONGODB_DATABASE}`);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
});

database.once('connected', () => {
  console.log('database connected');
});

module.exports = database;
