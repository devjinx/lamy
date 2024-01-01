<template>
  <div class="Dashboard">
    <Menu />
    <div class="content">
      <h1>Dashboard Title</h1>
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
  color: black; /* Ensure the text is visible */
}

.Dashboard {
  padding-top: 100px;
}

.content {
  display: flex; /* Flexbox layout for the content */
  justify-content: center; /* Horizontally center the content */
  align-items: center; /* Vertically center the content */
  height: 100vh; /* Full viewport height */
}
</style>
