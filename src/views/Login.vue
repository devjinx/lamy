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
export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessages: [], // Store error messages
    };
  },
  methods: {
    login() {
      // Clear previous error messages
      this.errorMessages = [];

      // Simplified example: Implement actual authentication logic here
      if (this.username === 'validUsername' && this.password === 'validPassword') {
        // Successful login
        alert('Login successful');
        // You can redirect the user or perform other actions here
      } else {
        // Failed login
        this.errorMessages.push('Invalid username or password');
        // You can customize error handling for failed logins
      }
    },
  },
};
</script>


<style scoped>
/* Global styles */
body {
  font-family: 'Kanit', sans-serif;
  text-align: center;
  margin: 0;
  padding: 0;
  background-color: #f2f2f2;
}

/* Style the form container */
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

/* Style the form labels and input fields */
label {
  font-family: 'Kanit', sans-serif;
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
}

input[type="text"],
input[type="password"] {
  font-family: 'Kanit', sans-serif;
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

/* Style the form buttons */
/* Global styles */
body {
  font-family: 'Kanit', sans-serif;
  text-align: center;
  margin: 0;
  padding: 0;
  background-color: #f2f2f2;
}

/* Style the form container */
h1 {
  font-family: 'Kanit', sans-serif;
  font-size: 24px;
  margin: 20px 0;
}

.register-form {
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

/* Style the form labels and input fields */
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

/* Style the submit button */
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
  color: red;
}
.login-form {
  padding-top: 50px; 
}

</style>
