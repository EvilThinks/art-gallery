const { Schema, model } = require("mongoose");
const schema = new Schema({
  name: { type: String },
  position: { type: String },
  phone: { type: String },
  email: { type: String },
  description: { type: String },
  photo: { type: String },
  title: { type: String },
  works: { type: Array },
});

module.exports = model("Artist", schema);
