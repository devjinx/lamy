<template>
  <form class="login-form needs-validation" @submit.prevent="login" novalidate>
    <div class="text-center mb-4">
      <h1 class="h3 mb-3 font-weight-normal">เข้าสู่ระบบ</h1>
    </div>
    <div class="form-group">
      <label for="username">ชื่อผู้ใช้:</label>
      <input type="text" id="username" v-model="username" name="username" class="form-control" required />
      <div class="invalid-feedback">โปรดใส่ชื่อผู้ใช้</div>
    </div>
    <div class="form-group">
      <label for="password">รหัสผ่าน:</label>
      <input type="password" id="password" v-model="password" name="password" class="form-control" required />
      <div class="invalid-feedback">โปรดใส่รหัสผ่าน</div>
    </div>
    <div v-if="errorMessages.length" class="alert alert-danger">
      <ul>
        <li v-for="message in errorMessages" :key="message">{{ message }}</li>
      </ul>
    </div>
    <div class="form-group">
      <button type="submit" class="btn btn-primary btn-block" style="background-color: #0ea5e9;">เข้าสู่ระบบ</button>
    </div>
    <div class="form-group">
      <router-link to="/register" class="btn btn-secondary btn-block mt-3" style="background-color: #0ea5e9;">สร้างบัญชี</router-link>
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
          localStorage.setItem('authToken', response.data.token);
          const userProfileResponse = await apiService.getCurrentUser();
          if (userProfileResponse && userProfileResponse.data) {
            localStorage.setItem('userProfile', JSON.stringify(userProfileResponse.data));
          }
          alert('เข้าสู่ระบบสำเร็จ');
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
<style>
body {
  font-family: 'Kanit', sans-serif;
  background-color: #f2f2f2;
}

.login-form {
  background-color: white;
  max-width: 400px;
  margin: 0 auto;
  padding: 100px;
  border-radius: 8px;
  box-shadow: 0 0 80px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.login-form h1 {
  margin-bottom: 20px;
}

.login-form input {
  margin-bottom: 15px;
  text-align: left; 
}

.login-form label {
  display: block; 
  text-align: left;
}

.login-form button, .login-form .btn-secondary {
  margin-top: 15px;
  text-align: left; 
}

.error-messages {
  color: #ff0000;
}
@media only screen and (max-width: 600px) {
  .login-form h1 {
    font-size: 20px; 
  }
  .login-form input {
    font-size: 15px;
    margin-bottom: 10px;
    padding: 10px;
  }
  .login-form {
    max-width: 90%; 
    padding: 60px;
  }
  .login-form label {
    font-size: 15px;
}

  .login-form button, .login-form .btn-secondary {
    font-size: 15px; 
  }
}
</style>