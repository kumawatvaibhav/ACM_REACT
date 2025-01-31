const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: String,
  content: String,
  category: String,
  author: String,
  image: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Blog', BlogSchema);
