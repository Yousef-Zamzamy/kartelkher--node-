const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the article)
const incomeSchema = new Schema({
  date: String,
  person: String,
  incom: Number,
  zkah: Number,
  sdkah: Number,
  elag: Number,
  zab7: Number,
  worker: Number,
});

// Create a model based on that schema
const Income = mongoose.model("Income", incomeSchema);

// export the model
module.exports = Income;
