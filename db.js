require("dotenv").config();
const mongoose = require('mongoose');

const MONGO_DB_ACCOUNT = process.env.MONGO_DB_ACCOUNT;
const MONGO_DB_PASSWORD = process.env.MONGO_DB_PASSWORD;

//connect to DB
const connectionString = `mongodb+srv://${MONGO_DB_ACCOUNT}:${MONGO_DB_PASSWORD}@cluster0.bx6cjqd.mongodb.net/Zano?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    await mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Could not connect to MongoDB...', err);
    process.exit(1);
  }
};

module.exports = connectDB;
