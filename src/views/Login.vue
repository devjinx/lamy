<template>
  <form class="login-form">
    <h1>Login</h1>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required /><br /><br />
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required /><br /><br />
    <div class="form-buttons">
      <input type="submit" value="Login" class="login-button" @click="login" />
      <router-link to="/register" class="back-to-register-button">Register ?</router-link>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      // Simplified example: Implement actual authentication logic here
      alert(`Logging in with username: ${this.username} and password: ${this.password}`);
    },
  },
};
</script>

<style scoped>
/* Global styles */
body {
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 0;
  padding: 0;
  background-color: #f2f2f2;
}

/* Style the form container */
.login-form {
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

/* Style the form buttons */
.form-buttons {
  text-align: center;
}

.login-button,
.back-to-register-button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
}

.login-button {
  background-color: #007bff;
  color: #fff;
  margin-right: 20px;
}

.login-button:hover {
  background-color: #0056b3;
}

.back-to-register-button {
  background-color: #007bff;
  color: #fff;
  transition: background-color 0.3s;
}

.back-to-register-button:hover {
  background-color: #0056b3;
}

</style>
