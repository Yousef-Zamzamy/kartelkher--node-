const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the article)
const zkahSchema = new Schema({
  date: String,
  ways: String,
  places: String,
  money: Number,
});

// Create a model based on that schema
const Zkah = mongoose.model("Zkah", zkahSchema);

// export the model
module.exports = Zkah;
