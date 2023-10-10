<template>
  <footer class="footer">
    <div class="container">
      <p class="centered-paragraph">&copy; {{ currentYear }} Lamy All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  line-height: 45px;
  font-size: 14px;
  background-color: #0ea5e9;
  color: #ffffff;
  text-align: center;
  font-family: 'Roboto', sans-serif;
}
  p{
  font-family: 'Roboto', sans-serif;

  }

.centered-paragraph {
  text-align: center; 
}
</style>
