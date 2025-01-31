import axios from "axios";

const API_URL = "https://acm-react.onrender.com/api";

// Login request
export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/auth/login`, { username: email, password });
  return response.data;
};


// Logout
export const logout = () => {
  localStorage.removeItem("token");
};
