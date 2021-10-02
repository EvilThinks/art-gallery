const { Schema, model } = require("mongoose");
const schema = new Schema({
  type: { type: String },
  artist: { type: String },
  photo: { type: String },
  title: { type: String },
  description: { type: String },
  sign_text: { type: String },
  creator_name: { type: String },
  location: { type: String },
  material: { type: String },
  dimensions: { type: String },
  credit: { type: String },
  creation_period: { type: String },
  visual_desc: { type: String },
  timeline_desc: { type: String },
});

module.exports = model("Work", schema);
