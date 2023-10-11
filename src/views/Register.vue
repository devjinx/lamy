<template>
  <form class="register-form">
    <center>
      <h1>Register</h1>
    </center>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required /><br /><br />
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required /><br /><br />
    <label for="confirm_password">Confirm Password:</label>
    <input type="password" id="confirm_password" name="confirm_password" required /><br /><br />
    <center>
      <div class="form-buttons">
      <input type="submit" value="Register" class="register-button" />
      <router-link to="/login" class="back-to-login-button">Back to Login</router-link>
    </div>
    </center>
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
    goToLogin() {
      // Redirect or navigate to your login page here
      // For example, you can use Vue Router for navigation
      // router.push('/login'); // Assuming you have set up Vue Router
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
h1 {
  font-size: 24px;
  margin: 20px 0;
}

.register-form {
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

/* Style the submit button */
input[type="submit"] {
  margin-left: 20px; /* Add spacing between buttons */
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

.back-to-login-button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  margin-left: 20px; /* Add spacing between buttons */
}

</style>
