<template>
  <Navbar />
  <div class="centered-content">
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
  </div>
  <Footer />

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
  .centered-content {
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center; 
    height: 55vh; 
    text-align: center; 
    padding-top: 50px; 
  }
</style>
