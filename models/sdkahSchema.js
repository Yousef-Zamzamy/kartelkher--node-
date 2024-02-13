const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the article)
const sdkahSchema = new Schema({
  date: String,
  ways: String,
  list: Number,
  places: String,
  money: Number,
});

// Create a model based on that schema
const Sdkah = mongoose.model("Sdkah", sdkahSchema);

// export the model
module.exports = Sdkah;
