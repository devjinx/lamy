<template>
  <center>
    <footer class="footer">
    <div class="container">
      <p class="centered-paragraph">&copy; {{ currentYear }} Lamy All rights reserved.</p>
    </div>
  </footer>
  </center>

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
  font-family: 'Kanit', sans-serif;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  line-height: 45px;
  font-size: 14px;
  background: linear-gradient(to bottom, #0ea5e9, #65C2F5);
  color: #ffffff;
  text-align: center;
  font-family: 'Roboto', sans-serif;
}
  p{
    font-family: 'Kanit', sans-serif;
  }

.centered-paragraph {
  text-align: center; 
}
</style>
