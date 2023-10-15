    import axios from 'axios';

    const API_BASE_URL = 'https://nswb-dev.lamy.pw/thanakorn/v0';

    // Function to set headers with credentials
    const setHeadersWithCredentials = () => {
      return {
        withCredentials: true,
      };
    };

    // Function to handle API errors
    const handleAPIError = (error) => {
      if (error.response) {
        // The request was made, but the server responded with an error.
        console.error('API Error:', error.response.data);
      } else {
        // Something happened in setting up the request that triggered an error.
        console.error('Request Error:', error.message);
      }
      throw error;
    };

    // Authentication API

    export const signIn = async (username, password) => {
      try {
        const response = await axios.post(
          `${API_BASE_URL}/auth/sign_in`,
          {
            username,
            password,
          },
          setHeadersWithCredentials()
        );
        return response.data;
      } catch (error) {
        handleAPIError(error);
      }
    };

    export const signUp = async (username, password) => {
      try {
        const response = await axios.post(
          `${API_BASE_URL}/auth/sign_up`,
          {
            username,
            password,
          },
          setHeadersWithCredentials()
        );
        return response.data;
      } catch (error) {
        handleAPIError(error);
      }
    };

    export const signOut = async () => {
      try {
        const response = await axios.post(
          `${API_BASE_URL}/auth/sign_out`,
          {},
          setHeadersWithCredentials()
        );
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

    // Other API functions for Stats, User, Categories, Products, etc. can be added similarly.

    // Export the API functions
    export default {
      signIn,
      signUp,
      signOut,
      getSettings,
      // Add other API functions here
    };
