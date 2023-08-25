const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  shortdesc: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  techused: {
    type: Array,
    required: true,
  },
  linkwebsite: {
    type: String,
    required: true,
  },
  linkgithub: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Project", projectSchema);
