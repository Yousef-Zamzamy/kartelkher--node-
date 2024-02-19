const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the article)
const workerSchema = new Schema({
  date: String,
  ways: String,
  money: Number,
});

// Create a model based on that schema
const Worker = mongoose.model("Worker", workerSchema);

// export the model
module.exports = Worker;
