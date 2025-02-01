const mongoose = require("mongoose");
const Blog = require('../models/Blog');

// Get all blog posts
exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    console.log("GET WALA : ", blogs);
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get a single blog post by ID
exports.getBlogById = async (req, res) => {
  const { id } = req.params;

  // Validate MongoDB ID format
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid blog ID format" });
  }

  try {
    const blog = await Blog.findById(id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (err) {
    console.error("Error fetching blog:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Add a new blog post
exports.createBlog = async (req, res) => {
  try {
    const newBlog = new Blog(req.body);
    console.log("create : ",newBlog);
    const savedBlog = await newBlog.save();
    console.log(savedBlog);
    res.json(savedBlog);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update a blog post
exports.updateBlog = async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBlog);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a blog post
exports.deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: 'Blog post deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
