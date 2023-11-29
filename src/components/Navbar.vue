<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link to="/" class="navbar-brand">Lamy</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">
              <i class="fas fa-home" aria-label="Home"></i> หน้าหลัก
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/store" class="nav-link">
              <i class="fas fa-store" aria-label="Store"></i> ร้านค้า
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/topup" class="nav-link">
              <i class="fas fa-wallet" aria-label="Top Up"></i> เติมเงิน
            </router-link>
          </li>
          <li class="nav-item">
            <a href="https://web.facebook.com/lamy.pw" class="nav-link">
              <i class="fas fa-address-card" aria-label="Contact"></i> ติดต่อ
            </a>
          </li>
        </ul>
        <div class="navbar-right">
          <template v-if="userIsAuthenticated && userProfile">
            <div class="user-dropdown dropdown">
              <a class="user-username dropdown-toggle" data-bs-toggle="dropdown" role="button">{{ userProfile.username }}</a>
              <div class="dropdown-menu">
                <a class="dropdown-item">{{ userProfile.username }}</a>
                <a @click="logout" class="dropdown-item">ลงชื่อออก</a>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="nav-links">
              <router-link to="/login" class="nav-item nav-link">
                <i class="fas fa-sign-in-alt" aria-label="Login"></i> เข้าสู่ระบบ
              </router-link>
              <router-link to="/register" class="nav-item nav-link">
                <i class="fas fa-user-plus" aria-label="Register"></i> สมัครสมาชิก
              </router-link>
            </div>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import apiService from '../service/apiService.js';

export default {
  data() {
    return {
      userIsAuthenticated: false,
      userProfile: null,
    };
  },
  methods: {
    async loadCachedUserProfile() {
      const cachedProfile = localStorage.getItem('userData');
      if (cachedProfile) {
        try {
          this.userProfile = JSON.parse(cachedProfile);
          this.userIsAuthenticated = true;
        } catch (error) {
          console.error('Error parsing cached user profile:', error);
        }
      }
    },
    logout() {
      this.userIsAuthenticated = false;
      this.userProfile = null;
      localStorage.removeItem('userProfile');
    },
  },
  mounted() {
    this.loadCachedUserProfile();
    console.log('Cached profile on mount:', this.userProfile);
  },
};
</script>

<style>
  body, ul {
    font-family: 'Kanit', sans-serif;
    margin: 0;
    padding: 0;
  }

  /* Center the navigation bar */
  .navbar {
    background: linear-gradient(to top, #0ea5e9, #65C2F5);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }

  .navbar a {
    color: white;
    text-align: center;
    padding: 18px 18px;
    text-decoration: none;
  }

  /* Update the font size of .navbar-lamy */
  .navbar-lamy {
    font-family: 'Kanit', sans-serif;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 20px 0 auto; /* Add a 20px right margin */
  }

  /* Center .navbar-right horizontally */
  .navbar-right {
    font-family: 'Kanit', sans-serif;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 20px 0 auto; /* Add a 20px right margin */
  }
  
  @media (max-width: 768px) {
    .nav-links {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 33%;
    }
  }

  @media (min-width: 769px) {
    .nav-links {
      display: flex;
      align-items: center;
    }
    .nav-links .nav-item {
      margin-right: 20px; /* Adjust the margin as needed */
    }
  }
</style>