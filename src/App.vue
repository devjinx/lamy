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
