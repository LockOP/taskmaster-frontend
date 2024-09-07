import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Replace with your actual backend URL

// Signup function
export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Login function
export const login = async (userData) => {
    
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  } 
};

// const response = await axios({
//     url: `${API_URL}/login`,
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json;charset=UTF-8",
//     },
//     data: payload,
//   });
