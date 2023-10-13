import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://nswb-dev.lamy.pw/thanakorn/v0', 
  withCredentials: true, // Send cookies with requests for authorization
});

// Define functions for making API requests
export const signIn = (username, password, recaptchaResponse) => {
  return instance.post('/auth/sign_in', {
    username,
    password,
    'g-recaptcha-response': recaptchaResponse,
  });
};

export const signUp = (username, password, recaptchaResponse) => {
  return instance.post('/auth/sign_up', {
    username,
    password,
    'g-recaptcha-response': recaptchaResponse,
  });
};

export const signOut = () => {
  return instance.post('/auth/sign_out');
};

export const getUserInfo = () => {
  return instance.get('/users/@me');
};

// Store-related functions
export const getCategories = () => {
  return instance.get('/categories');
};

export const getCategoryByIdOrSlug = (idOrSlug) => {
  return instance.get(`/categories/${idOrSlug}`);
};

export const getProducts = () => {
  return instance.get('/products');
};

export const getProductByIdOrSlug = (idOrSlug) => {
  return instance.get(`/product/${idOrSlug}`);
};

export const buyStockProduct = (productId, amount) => {
  return instance.post(`/orders/stock/${productId}`, { amount });
};

export const buyIdPassProduct = (productId, amount, data) => {
  return instance.post(`/orders/id_pass/${productId}`, { amount, data });
};

export const getOrderHistory = () => {
  return instance.get('/orders');
};

// Topup-related functions
export const topupTrueMoneyVoucher = (voucherCode, recaptchaResponse) => {
  return instance.post('/topup/truemoney/voucher', { voucher_code: voucherCode, 'g-recaptcha-response': recaptchaResponse });
};

export const verifySlip = (barcode, recaptchaResponse) => {
  return instance.post('/topup/scanslip', { barcode, 'g-recaptcha-response': recaptchaResponse });
};

export const getTopupHistory = () => {
  return instance.get('/topup');
};

// Export the Axios instance with the interceptors
export default instance;