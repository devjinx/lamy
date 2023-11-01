<template>
  <form class="login-form" @submit.prevent="login">
    <div class="centered">
      <h1>Login</h1>
    </div>
    <label for="username">Username:</label>
    <input type="text" id="username" v-model="username" name="username" required /><br /><br />
    <label for="password">Password:</label>
    <input type="password" id="password" v-model="password" name="password" required /><br /><br />
    <div v-if="errorMessages.length" class="error-messages">
      <ul>
        <li v-for="message in errorMessages" :key="message">{{ message }}</li>
      </ul>
    </div>
    <div class="centered">
      <div class="form-buttons">
        <input type="submit" value="Login" class="login-button" />
        <router-link to="/register" class="back-to-register-button">Register ?</router-link>
      </div>
    </div>
  </form>
</template>

<script>
import apiService from '../service/apiService.js';

export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessages: [],
    };
  },
  methods: {  
    async login() {
       this.errorMessages = []; // Clear previous error messages

  try {
    const userData = {
      username: this.username,
      password: this.password,
    };

    const response = await apiService.signIn(userData);
    console.log(response); // Log the response check

    if (response.data && response.data.token) {
      // Token is present in the response
      // Store the token, e.g., in local storage or Vuex state
      localStorage.setItem('authToken', response.data.token);

      alert('Login successful');
      this.$router.push('/');
      // Redirect to the home page when login is successful
    } else {
      if (response.message) {
        this.errorMessages.push(response.message);
      }
    }
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      this.errorMessages.push(error.response.data.message);
    } else {
      this.errorMessages.push('An error occurred during the login');
    }
  }
},

  },
};
</script>

<style scoped>
body {
  font-family: 'Kanit', sans-serif;
  text-align: center;
  margin: 0;
  padding: 0;
  background-color: #f2f2f2;
}

.login-form {
  font-family: 'Kanit', sans-serif;
  background-color: #ffffff;
  max-width: 400px;
  margin: 0 auto;
  padding: 100px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: left;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

label {
  font-family: 'Kanit', sans-serif;
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

input[type="submit"] {
  font-family: 'Kanit', sans-serif;
  margin-left: 20px;
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
}

input[type="submit"]:hover {
  background-color: #0056b3;
}

.back-to-register-button {
  font-family: 'Kanit', sans-serif;
  margin-left: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
}

.centered {
  text-align: center;
}

.error-messages {
  color: #ff0000;
}

.login-form {
  padding-top: 50px;
}
</style>
