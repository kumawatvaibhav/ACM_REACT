import axios from "axios";

const API_URL = "https://acm-react.onrender.com/api";

export const login = async (email, password) => {
  try {
    console.log("Sending login request with:", { email, password });
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    console.log("Login response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw error;
  }
};


// Logout
export const logout = () => {
  localStorage.removeItem("token");
};
