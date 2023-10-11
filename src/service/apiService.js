import axios from 'axios';

const apiService = {
  // Function for making a POST request to sign up a new user
  signUp: (userData) => {
    return axios.post('https://nswb-dev.lamy.pw/v0/thanakorn/auth/sign_up', userData);
  }
};

export default apiService;