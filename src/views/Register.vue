<template>
  <form class="register-form" @submit.prevent="registerUser">
    <div class="centered">      
      <h1>Register</h1>
    </div>
    <label for="username">Username:</label>
    <input type="text" id="username" v-model="username" name="username" required /><br /><br />
    <label for="password">Password:</label>
    <input type="password" id="password" v-model="password" name="password" required /><br /><br />
    <label for="confirm_password">Confirm Password:</label>
    <input type="password" id="confirm_password" v-model="confirmPassword" name="confirm_password" required /><br /><br />
    <div class="centered">      
      <div class="form-buttons">
        <input type="submit" value="Register" class="register-button" />
        <router-link to="/login" class="back-to-login-button">Back to Login</router-link>
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
      confirmPassword: '', 
    };
  },
  methods: {
    registerUser() {
      if (this.password !== this.confirmPassword) {
        // Handle password mismatch (show an error message or alert)
        console.error('Password and confirm password do not match');
        return;
      }

      const userData = {
        username: this.username,
        password: this.password,
        // Add other registration data as needed
      };

      // Call your API registration function here (e.g., this.$userService.signUp(userData))
      // Handle the API response and errors as appropriate
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

.back-to-login-button {
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

</style>
