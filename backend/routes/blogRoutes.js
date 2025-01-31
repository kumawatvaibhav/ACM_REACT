const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");
const upload = require("../middleware/upload");
const authMiddleware = require("../middleware/authMiddleware"); // Import authentication middleware

// Get all blogs (Public)
router.get("/", blogController.getBlogs);

// Get single blog by ID (Public)
router.get("/:id", blogController.getBlogById);

// Create a new blog (Admin Only)
router.post("/", authMiddleware, blogController.createBlog);

// Update a blog (Admin Only)
router.put("/:id", authMiddleware, blogController.updateBlog);

// Delete a blog (Admin Only)
router.delete("/:id", authMiddleware, blogController.deleteBlog);

// Upload image to Cloudinary and return URL (Admin Only)
router.post("/upload", authMiddleware, upload.single("image"), async (req, res) => {
  try {
    console.log("File uploaded successfully");

    if (!req.file || !req.file.path) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    console.log("File uploaded successfully");
    const imageUrl = req.file.path;

    res.json({ imageUrl }); 
  } catch (err) {
    res.status(500).json({ message: "Upload failed", error: err.message });
  }
});


module.exports = router;
