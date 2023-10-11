import axios from 'axios';

const otherService = {
  // Function for making a GET request to fetch some other data
  fetchOtherData: () => {
    return axios.get('https://nswb-dev.lamy.pw/v0/thanakorn/other-endpoint');
  },

  // Function for making a POST request to perform another action
  performOtherAction: (requestData) => {
    return axios.post('https://nswb-dev.lamy.pw/v0/thanakorn/other-action', requestData);
  },
};

export default otherService;