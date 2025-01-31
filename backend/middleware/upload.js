const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

// Configure Multer to store images in Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: process.env.CLOUDINARY_FOLDER, 
    allowedFormats: ["jpg", "jpeg", "png"], 
    public_id: (req, file) => file.originalname.split(".")[0], 
  },
});

const upload = multer({ storage });

module.exports = upload;
