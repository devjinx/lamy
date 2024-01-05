<template>
  <div class="Dashboard">
    <Menu />
    <div class="content">
      <h1>Welcome to the Dashboard</h1>
    </div>
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
h1 {
  text-align: center;
  color: black; 
}

.Dashboard {
  padding-top: 100px;
}

.content {
  display: flex;
  justify-content: center; 
  align-items: center; 
  height: 100%;
}
</style>