<template>
  <nav class="navbar">
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/Lamy_logo_png.png" alt="Your Logo" width="32" height="32" />
        </router-link>
      </div>
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/Store">Store</router-link></li>
        <li><router-link to="/Topup">TopUp</router-link></li>
        <li><router-link to="/Register">Register</router-link></li>
        <li><router-link to="/Login">Login</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
.navbar {
  background-color: #333;
  color: #fff;
  padding: 10px 0;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  font-size: 24px;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav-links li {
  font-size: 18px;
}

.nav-links li a {
  text-decoration: none;
  color: #fff;
}

.nav-links li a:hover {
  text-decoration: underline;
}
</style>