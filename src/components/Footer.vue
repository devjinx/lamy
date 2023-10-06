<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; {{ currentYear }} Your Company Name. All rights reserved.</p>
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
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

p {
  margin: 0;
  font-size: 14px;
}
</style>
