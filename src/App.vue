<template>
    <div id="app">
      <Navbar />
      <Header />
      <main>
        <router-view />
      </main>
      <Footer />
    </div>
  </template>
  
  <script>
  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue';
  
  export default {
    components: {
      Navbar,
      Footer
    },
  };
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@500&display=swap');
  </style>

  