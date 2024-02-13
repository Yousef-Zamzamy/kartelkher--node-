const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the article)
const zab7Schema = new Schema({
  date: String,
  ways: String,
  places: String,
  users: Number,
  meatmoney: Number,
  ricemoney: Number,
});

// Create a model based on that schema
const Zab7 = mongoose.model("Zab7", zab7Schema);

// export the model
module.exports = Zab7;
