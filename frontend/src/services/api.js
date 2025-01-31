import axios from "axios";

const API_URL = "https://your-render-backend-url.onrender.com/api";

// Login request
export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/auth/login`, { email, password });
  return response.data;
};

// Fetch blogs
export const fetchBlogs = async () => {
  const response = await axios.get(`${API_URL}/blogs`);
  return response.data;
};

// Create blog (Authenticated)
export const createBlog = async (blogData, token) => {
  const response = await axios.post(`${API_URL}/blogs`, blogData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Upload image
export const uploadImage = async (imageFile, token) => {
  const formData = new FormData();
  formData.append("image", imageFile);

  const response = await axios.post(`${API_URL}/blogs/upload`, formData, {
    headers: { 
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.imageUrl;
};

// Logout
export const logout = () => {
  localStorage.removeItem("token");
};
