<template>
  <div class="main-container">
    <Navbar />
    <div class="centered-content">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer  
  }
};
</script>

<style>
  .main-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .centered-content {
    display: flex;
    flex-direction: column;
    align-items: center; 
    text-align: center; 
    flex-grow: 1;
    padding-top: 120px;
  }
</style>
