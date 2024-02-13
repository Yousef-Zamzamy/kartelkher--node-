const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the article)
const financialSchema = new Schema({
  date: String,
  ways: String,
  type: String,
  places: String,
  money: Number,
});

// Create a model based on that schema
const Financial = mongoose.model("Financial", financialSchema);

// export the model
module.exports = Financial;
