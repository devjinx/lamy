<template>
  <form class="login-form needs-validation" @submit.prevent="registerUser" novalidate>
    <div class="text-center mb-4">
      <h1 class="h3 mb-3 font-weight-normal">สร้างบัญชี</h1>
    </div>
    <div class="form-group">
      <label for="username">ชื่อผู้ใช้:</label>
      <input type="text" id="username" v-model="username" name="username" class="form-control" required />
    </div>
    <div class="form-group">
      <label for="password">รหัสผ่าน:</label>
      <input type="password" id="password" v-model="password" name="password" class="form-control" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" />
    </div>
    <div class="form-group">
      <label for="confirm_password">ยืนยันรหัสผ่าน:</label>
      <input
        type="password"
        id="confirm_password"
        v-model="confirmPassword"
        name="confirm_password"
        class="form-control"
        required
        @input="validatePasswordMatch"
      />
      <div v-if="!passwordsMatch" class="invalid-feedback">รหัสผ่านไม่ตรงกัน</div>
    </div>
    <div v-if="errorMessages.length" class="alert alert-danger">
      <ul>
        <li v-for="message in errorMessages" :key="message">{{ message }}</li>
      </ul>
    </div>

    <div class="form-group">
      <button type="submit" class="btn btn-primary btn-block" style="background-color: #0ea5e9;" :disabled="isLoading">
        {{ isLoading ? 'กำลังสร้างบัญชี...' : 'สร้างบัญชี' }}
      </button>
    </div>
    <div class="form-group">
      <router-link to="/login" class="btn btn-secondary btn-block mt-3" style="background-color: #0ea5e9;">กลับไปที่หน้าเข้าสู่ระบบ</router-link>
    </div>
  </form>
</template>
<script>
import { signUp } from '../service/apiService.js';

export default {
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      errorMessages: [],
      passwordsMatch: true,
      isLoading: false,
    };
  },
  methods: {
    validatePasswordMatch() {
      this.passwordsMatch = this.password === this.confirmPassword;
    },
    async registerUser() {
      this.errorMessages = [];
      this.passwordsMatch = this.password === this.confirmPassword;

      if (!this.passwordsMatch) {
        return;
      }

      this.isLoading = true;

      const userData = {
        username: this.username,
        password: this.password,
      };

      try {
        const response = await signUp(userData);
        console.log('Registration success:', response.data);

        // Redirect the user to the login page
        this.$router.push('/login');
      } catch (error) {
        console.error('Registration error:', error);
        if (error.response && error.response.data.errors) {
          this.errorMessages = error.response.data.errors.map((error) => error.msg);
        } else {
          this.errorMessages.push('An error occurred during registration.');
        }
      } finally {
        this.isLoading = false;
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