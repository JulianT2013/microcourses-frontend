// src/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // Backend URL

export const fetchCourses = () => axios.get(`${API_BASE_URL}/courses`);
export const fetchCourseById = (id) => axios.get(`${API_BASE_URL}/courses/${id}`);
