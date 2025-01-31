import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BlogManagement from "../components/BlogManagement";
import { logout } from "../services/api";

function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if token exists
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // Redirect to login if not authenticated
    }
  }, [navigate]);

  const handleLogout = () => {
    logout();
    navigate("/login"); // Redirect to login after logout
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">ACM ADMIN</span>
            </div>
            <div className="flex items-center">
              <button 
                onClick={handleLogout} 
                className="bg-red-500 text-white px-4 py-2 rounded-md text-sm hover:bg-red-600 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Manage Blog Posts</h2>
            <BlogManagement />
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;
