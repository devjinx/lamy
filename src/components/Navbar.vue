<template>
  <div class="navbar">
    <div class="navbar-lamy">
      <RouterLink to="/"><a>Lamy</a></RouterLink>
      <RouterLink to="/"><a>Home</a></RouterLink>
      <RouterLink to="/store"><a>Store</a></RouterLink>
      <RouterLink to="/topup"><a>Topup</a></RouterLink>
    </div>
    <div class="navbar-right">
      <template v-if="userIsAuthenticated">
        <!-- Display username and logout option when the user is authenticated -->
        <div class="user-dropdown">
          <a class="user-username">{{ username }}</a>
          <div class="user-dropdown-content">
            <a @click="logout">Logout</a>
          </div>
        </div>
      </template>
      <template v-else>
        <!-- Display sign-in and sign-up when the user is not authenticated -->
        <RouterLink to="/login"><a>Sign in</a></RouterLink>
        <RouterLink to="/register"><a>Sign up</a></RouterLink>
      </template>
    </div>
  </div>
</template>

<script>
import apiService from '../service/apiService.js';
export default {
  data() {
    return {
      userIsAuthenticated: false, // Initially, the user is not authenticated
      username: '', // Initialize username to an empty string
    };
  },
  methods: {
    async login() {
      try {
        const userData = {
          // Provide the user data for authentication, e.g., email and password
          // Replace these with actual user input or data from a form
        };
        const response = await apiService.signIn(userData);

        // Assuming the login was successful, set userIsAuthenticated and username
        this.userIsAuthenticated = true;
        this.username = response.username; // Adjust this based on your API response
      } catch (error) {
        // Handle login error, e.g., show an error message
        console.error('Login error:', error);
      }
    },
    async logout() {
      try {
        await apiService.signOut();
        // Assuming the logout was successful, reset userIsAuthenticated and username
        this.userIsAuthenticated = false;
        this.username = '';
      } catch (error) {
        // Handle logout error, e.g., show an error message
        console.error('Logout error:', error);
      }
    },
  },
};
</script>

<style scoped>  
  body, ul {
    font-family: 'Kanit', sans-serif;
    margin: 0;
    padding: 0;
  }

  /* Center the navigation bar */
  .navbar {
    background: linear-gradient(to top, #0ea5e9, #65C2F5);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }

  .navbar a {
    color: white;
    text-align: center;
    padding: 18px 18px;
    text-decoration: none;
  }

  /* Update the font size of .navbar-lamy */
  .navbar-lamy {
    font-family: 'Kanit', sans-serif;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto; /* Center horizontally within the screen */
  }

  /* Center .navbar-right horizontally */
  .navbar-right {
    font-family: 'Kanit', sans-serif;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto; /* Center horizontally within the screen */
  }
</style>
