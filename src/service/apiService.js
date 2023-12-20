import axios from 'axios';

const API_BASE_URL = 'https://nswb-dev.lamy.pw/thanakorn/v0'; 

// Create an Axios instance
const instance = axios.create({
  baseURL: API_BASE_URL,
});

// Request interceptor to add a "Cookie" header with the token value
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("lamy_token");
  if (token) {
    config.headers["Cookie"] = `lamy_token=${token}`;
  }
  return config;
});

const setHeadersWithCredentials = () => ({ withCredentials: true });

const handleAPIError = (error) => {
  if (error.response) {
    console.error('API Error:', error.response.data);
  } else {
    console.error('Request Error:', error.message);
  }
  throw error;
};
// Authentication API
export const signIn = async (userdata) => {
  try {
    const response = await instance.post(`${API_BASE_URL}/auth/sign_in`, userdata, setHeadersWithCredentials());
    return response.data;
  } catch (error) {
    handleAPIError(error);
  }
};

export const signUp = async (userdata) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/sign_up`, userdata, setHeadersWithCredentials());
    return response.data;
  } catch (error) {
    handleAPIError(error);
  }
};

export const signOut = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/sign_out`, {}, setHeadersWithCredentials());
    return response.data;
  } catch (error) {
    handleAPIError(error);
  }
};

// Settings API
export const getSettings = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/settings`, setHeadersWithCredentials());
    return response.data;
  } catch (error) {
    handleAPIError(error);
  }
};

// Stats API
export const getStats = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/stats`, setHeadersWithCredentials());
    return response.data;
  } catch (error) {
    handleAPIError(error);
  }
};

// User API
export const getCurrentUser = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/@me`, setHeadersWithCredentials());
    return response.data;
  } catch (error) {
    handleAPIError(error);
  }
};

// Categories API
export const getCategories = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/categories`, setHeadersWithCredentials());
    return response.data;
  } catch (error) {
    handleAPIError(error);
  }
};

export const getCategory = async (idOrSlug) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/categories/${idOrSlug}`, setHeadersWithCredentials());
    return response.data;
  } catch (error) {
    handleAPIError(error);
  }
};

// Products API
export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`, setHeadersWithCredentials());
    return response.data;
  } catch (error) {
    handleAPIError(error);
  }
};

export const getProduct = async (idOrSlug) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/product/${idOrSlug}`, setHeadersWithCredentials());
    return response.data;
  } catch (error) {
    handleAPIError(error);
  }
};

export const buyStockProduct = async (productId, amount) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/orders/stock/${productId}`, { amount }, setHeadersWithCredentials());
    return response.data;
  } catch (error) {
    handleAPIError(error);
  }
};

export const buyIdPassProduct = async (productId, amount, data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/orders/id_pass/${productId}`, { amount, data }, setHeadersWithCredentials());
    return response.data;
  } catch (error) {
    handleAPIError(error);
  }
};

export default {
  signIn,
  signUp,
  signOut,
  getSettings,
  getStats,
  getCurrentUser,
  getCategories,
  getCategory,
  getProducts,
  getProduct,
  buyStockProduct,
  buyIdPassProduct,
};