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
      <input type="password" id="password" v-model="password" name="password" class="form-control" required />
    </div>
    <div class="form-group">
      <label for="confirm_password">ยืนยันรหัสผ่าน:</label>
      <input type="password" id="confirm_password" v-model="confirmPassword" name="confirm_password" class="form-control" required />
      <div class="invalid-feedback">รหัสผ่านไม่ตรงกัน</div>
    </div>

    <!-- Display error messages -->
    <div v-if="errorMessages.length" class="alert alert-danger">
      <ul>
        <li v-for="message in errorMessages" :key="message">{{ message }}</li>
      </ul>
    </div>

    <div class="form-group">
      <button type="submit" class="btn btn-primary btn-block" style="background-color: #0ea5e9;">สร้างบัญชี</button>
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
    };
  },
  methods: {
  async registerUser() {
    this.errorMessages = [];

    if (this.password !== this.confirmPassword) {
      this.errorMessages.push('Password and confirm password do not match');
      return;
    }

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
    }
  },
},
};
</script>

<style >
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
  padding-top: 50px; 
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
.error-messages {
  color: red;
}

</style>