<template>
  <div class="Dashboard">
    <Menu />
    <Footer />
  </div>
</template>

<script>
import Menu from '../components/Menu.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Dashboard',
  components: {
    Menu,
    Footer,
  }
};
</script>

<style>
.Dashboard {
  padding-top: 100px; 
}
</style>
``