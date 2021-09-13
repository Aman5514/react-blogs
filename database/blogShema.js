const mongoose = require("mongoose");

const blogShema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim:true
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
    trim: true
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  mdesc: {
    type: String,
  },
  desc: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  }
});

const Blogs = new mongoose.model("blog", blogShema);

module.exports = Blogs;
