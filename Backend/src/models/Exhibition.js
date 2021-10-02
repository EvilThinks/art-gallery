const { Schema, model } = require("mongoose");
const schema = new Schema({
  title: { type: String },
  date_start: { type: String },
  date_end: { type: String },
  date_status: { type: String },
  phooto: { type: String },
  gallery: { type: Array },
  curators: { type: String },
  description: { type: String },
  video_url: { type: String },
  sponsors: { type: Array },
});

module.exports = model("Exhibition", schema);
