<template>
  <footer class="footer">
    <div class="container text-center">
      <p>&copy; {{ currentYear }} Lamy All rights reserved.</p>
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

<style>
.footer {
  text-align: center;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  line-height: 60px; /* Adjusted line-height to center text vertically */
  font-size: 16px;
  background: linear-gradient(to bottom, #0ea5e9, #65C2F5);
  color: #ffffff;
  font-family: 'Kanit', sans-serif;
}
</style>