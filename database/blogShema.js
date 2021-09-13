const mongoose = require("mongoose");

const blogShema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    data: {
      type:String,
    required: true,
    },
  },
  author: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  mdesc: {
    type: String,
  },
  desc: {
    type: String,
    required: true,
    unique: true,
  }
});

const Blogs = new mongoose.model("blog", blogShema);

module.exports = Blogs;
