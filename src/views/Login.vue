<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
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
        // You can implement authentication logic here
        // For a simplified example, we'll just display the entered credentials
        alert(`Logging in with username: ${this.username} and password: ${this.password}`);
      },
    },
  };
  </script>
  
    <style scoped>

    </style>
  