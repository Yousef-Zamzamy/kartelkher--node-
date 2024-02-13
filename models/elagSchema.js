const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the article)
const elagSchema = new Schema({
  date: String,
  ways: String,
  places: String,
  money: Number,
});

// Create a model based on that schema
const Elag = mongoose.model("Elag", elagSchema);

// export the model
module.exports = Elag;
