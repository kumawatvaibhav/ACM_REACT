"use client";

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Share2, Twitter, Linkedin, Link } from "lucide-react";

export default function BlogDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Fetching Blog ID:");
    console.log("Fetching Blog ID:", id);
    axios.get(`https://acm-react.onrender.com/api/blogs/${id}`)
      .then(response => {
        setPost(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching blog details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="text-center text-red-500 min-h-screen flex items-center justify-center">
        <p>Blog not found</p>
      </div>
    );
  }

  const handleShare = (platform) => {
    const blogUrl = `${window.location.origin}/blog/${post._id}`;
    if (platform === "twitter") {
      window.open(`https://twitter.com/intent/tweet?text=${post.title}&url=${blogUrl}`, "_blank");
    } else if (platform === "linkedin") {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${blogUrl}`, "_blank");
    } else if (platform === "copy") {
      navigator.clipboard.writeText(blogUrl);
      alert("Blog link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative w-full h-60 bg-gradient-to-r from-blue-500 to-blue-800 flex items-center justify-center text-white text-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <p className="text-lg mt-2">By <span className="font-semibold">{post.author}</span> | {new Date(post.date).toLocaleDateString()}</p>
        </div>
      </div>

      {/* Blog Content */}
      <main className="container mx-auto px-4 py-10 max-w-3xl">
        {/* Back Button */}
        <button 
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition mb-6"
          onClick={() => navigate("/blog")}
        >
          ← Back to Blogs
        </button>

        {/* Image Gallery */}
        {post.image && (
          <div className="w-full flex justify-center">
            <img src={post.image} alt="Blog Cover" className="w-full h-auto rounded-lg shadow-md" />
          </div>
        )}

        {/* Blog Content */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
          <p className="text-gray-800 leading-relaxed">{post.content}</p>
        </div>

        {/* Share Options */}
        <div className="flex items-center space-x-4 mt-6">
          <p className="font-semibold text-gray-700">Share this post:</p>
          <button onClick={() => handleShare("twitter")} className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition">
            <Twitter className="w-5 h-5" />
          </button>
          <button onClick={() => handleShare("linkedin")} className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800 transition">
            <Linkedin className="w-5 h-5" />
          </button>
          <button onClick={() => handleShare("copy")} className="bg-gray-300 text-gray-700 p-2 rounded-full hover:bg-gray-400 transition">
            <Link className="w-5 h-5" />
          </button>
        </div>
      </main>
    </div>
  );
}
