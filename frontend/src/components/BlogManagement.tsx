"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Input from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/Button";

export default function BlogManagement() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null); 
  const [imageUrl, setImageUrl] = useState(""); 

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("https://acm-react.onrender.com/api/blogs");
      setPosts(response.data);
    } catch (err) {
      console.error("Error fetching posts:", err);
    }
  };

  // Handle Image Upload
  const handleImageUpload = async (file) => {

    const token = localStorage.getItem("token");

    if (!file) return;
    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await axios.post("https://acm-react.onrender.com/api/blogs/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" , Authorization: `Bearer ${token}` },

      });
      setImageUrl(response.data.imageUrl); 
      setImage(URL.createObjectURL(file)); 
    } catch (err) {
      console.error("Error uploading image:", err);
    }
  };

  // Handle Form Submit (Add or Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const blogData = { title, content, author, category, image: imageUrl };
  
      const headers = {
        "Content-Type": "application/json", // Use application/json instead of multipart/form-data
        Authorization: `Bearer ${token}`,
      };
  
      if (selectedPost) {
        const response = await axios.put(
          `https://acm-react.onrender.com/api/blogs/create/${selectedPost._id}`,
          blogData,
          { headers }
        );
        setPosts(posts.map((post) => (post._id === selectedPost._id ? response.data : post)));
      } else {
        const response = await axios.post(
          "https://acm-react.onrender.com/api/blogs/create",
          blogData,
          { headers }
        );
        setPosts([...posts, response.data]);
      }
  
      resetForm();
    } catch (err) {
      console.error("Error saving post:", err.response?.data || err.message);
    }
  };

  // Handle Delete
  const handleDelete = async (id) => {
    const headers = {
      "Content-Type": "application/json", // Use application/json instead of multipart/form-data
      Authorization: `Bearer ${token}`,
    };

    try {
      console.log("Deleting post with id:", id);
      await axios.delete(`https://acm-react.onrender.com/api/blogs/delete/${id}`, { headers });
      setPosts(posts.filter((post) => post._id !== id));
      if (selectedPost?._id === id) resetForm();
    } catch (err) {
      console.error("Error deleting post:", err);
    }
  };

  // Handle Edit
  const handleEdit = (post) => {
    setSelectedPost(post);
    setTitle(post.title);
    setContent(post.content);
    setAuthor(post.author);
    setCategory(post.category);
    setImageUrl(post.image);
    setImage(post.image ? post.image : null);
  };

  // Reset Form
  const resetForm = () => {
    setSelectedPost(null);
    setTitle("");
    setContent("");
    setAuthor("");
    setCategory("");
    setImage(null);
    setImageUrl("");
  };

  // Handle Drag-and-Drop
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleImageUpload(file);
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <Textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required rows={5} />
        <Input placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        <Input placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />

        {/* Image Upload Section */}
        <div className="border border-gray-300 p-4 rounded-md text-center relative" 
             onDragOver={(e) => e.preventDefault()} 
             onDrop={handleDrop}>
          <p className="text-gray-500">Drag & Drop an image or click to upload</p>
          <input 
            type="file" 
            accept="image/*" 
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={(e) => handleImageUpload(e.target.files[0])}
          />
          {image && <img src={image} alt="Preview" className="w-full h-auto mt-2 rounded-md" />}
        </div>

        <Button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          {selectedPost ? "Update Post" : "Add Post"}
        </Button>
        {selectedPost && (
          <Button type="button" variant="outline" onClick={resetForm} className="ml-2">
            Cancel Edit
          </Button>
        )}
      </form>

      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post._id} className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">{post.title}</h3>
            <p className="text-sm text-gray-500">{post.author} - {new Date(post.date).toLocaleDateString()}</p>
            {post.image && <img src={post.image} alt="Blog Cover" className="w-full h-auto rounded-md mt-2" />}
            <p className="mt-2">{post.content.substring(0, 100)}...</p>
            <div className="mt-4 space-x-2">
              <Button onClick={() => handleEdit(post)} variant="outline">
                Edit
              </Button>
              <Button onClick={() => handleDelete(post._id)} variant="destructive">
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
