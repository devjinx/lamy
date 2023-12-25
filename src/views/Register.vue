<template>
  <Navbar />
    <div class="main-content">
      <form class="registration-form needs-validation" @submit.prevent="registerUser" novalidate>
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
          <input type="password" id="confirm_password" v-model="confirmPassword" name="confirm_password" class="form-control" required @input="validatePasswordMatch" />
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
          <router-link to="/login" class="btn btn-secondary btn-block mt-3" style="background-color: #0ea5e9;">เข้าสู่ระบบ?</router-link>
        </div>
      </form>
    </div>
  <Footer />
</template>

<script>
import { signUp } from '../service/apiService.js';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

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
  components: {
    Navbar,
    Footer  
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
        this.$router.push('/login');
      } catch (error) {
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

.main-content {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(107vh - 120px); /* Adjust based on the height of Navbar and Footer */
}

/* Styles for the form container */
.registration-form {
  background-color: white;
  max-width: 400px;
  margin: 100px auto; /* Centers the form on the page with margin */
  padding: 40px; /* Padding inside the form */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 0 80px rgba(0, 0, 0, 0.1); /* Shadow effect */
}

/* Styles for form headers */
.registration-form h1 {
  margin-bottom: 20px; /* Space below the header */
}

/* Styles for form inputs */
.registration-form input {
  margin-bottom: 15px; /* Space below each input */
  text-align: left;
}

/* Styles for form labels */
.registration-form label {
  display: block; 
  text-align: left; /* Aligns label text to the left */
}

/* Styles for buttons */
.registration-form button, .registration-form .btn-secondary {
  margin-top: 15px; /* Space above the buttons */
  text-align: left; 
}

/* Responsive styles for smaller screens */
@media only screen and (max-width: 600px) {
  .registration-form h1 {
    font-size: 20px; 
  }
  .registration-form input {
    font-size: 15px;
    margin-bottom: 10px;
    padding: 10px;
  }
  .registration-form {
    max-width: 90%; 
    padding: 60px;
  }
  .registration-form label {
    font-size: 15px;
  }
  .registration-form button, .registration-form .btn-secondary {
    font-size: 15px; 
  }
}
</style>