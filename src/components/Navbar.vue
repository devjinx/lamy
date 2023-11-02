<template>
  <div class="navbar">
    <div class="navbar-lamy">
      <router-link to="/"><a>Lamy</a></router-link>
      <router-link to="/"><a>Home</a></router-link>
      <router-link to="/store"><a>Store</a></router-link>
      <router-link to="/topup"><a>Topup</a></router-link>
    </div>
    <div class="navbar-right">
      <template v-if="userIsAuthenticated">
        <div class="user-dropdown">
          <a class="user-username">{{ username }}</a>
          <div class="user-dropdown-content">
            <a @click="logout">Logout</a>
          </div>
        </div>
      </template>
      <template v-else>
        <router-link to="/login"><a>Sign in</a></router-link>
        <router-link to="/register"><a>Sign up</a></router-link>
      </template>
    </div>
  </div>
</template>

<script>
import apiService from '../service/apiService.js';

export default {
  data() {
    return {
      userIsAuthenticated: false,
      username: '',
    };
  },
  methods: {
    async login() {
      // Simulated login, replace with actual authentication logic
      // Assume a successful login response with a username
      const response = await fakeLogin(); // Replace with your API service
      console.log(response); // Log the response
      if (response.success) {
        this.userIsAuthenticated = true;
        this.username = response.username;
      }
    },
    logout() {
      // Simulated logout, reset user data
      this.userIsAuthenticated = false;
      this.username = '';
    },
  },
};

async function fakeLogin() {
  // Simulated login response (replace with real API call)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, username: 'JohnDoe' });
    }, 1000);
  });
}
</script>

<style>  
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
