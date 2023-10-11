import axios from 'axios';

const userService = {
  // Function for making a POST request to sign up a new user
  signUp: (userData) => {
    return axios.post('https://nswb-dev.lamy.pw/v0/thanakorn/auth/sign_up', userData);
  },

  // Function for making a GET request to fetch user profile
  getUserProfile: (userId) => {
    return axios.get(`https://nswb-dev.lamy.pw/v0/thanakorn/users/${userId}`);
  },
};

export default userService;
