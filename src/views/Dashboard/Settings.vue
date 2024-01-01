<template>
  <div class="Dashboard">
    <Menu />
      <h1>Settings</h1>
    <Footer />
  </div>
</template>

<script>
import Menu from '../../components/Menu.vue';
import Footer from '../../components/Footer.vue';

export default {
  name: 'Dashboard',
  components: {
    Menu,
    Footer
  }
};
</script>
<style>
h1{
  text-align: center;
}
.Dashboard{
  padding-top: 100px; 
}
</style>