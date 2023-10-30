<template>
  <div class="topup">
    <h1>
      Topup{{ isAuthenticated ? ' for ' + authenticatedUsername : '' }}
    </h1>
  </div>
</template>

<script>
import apiService from '../service/apiService.js';

export default {
  data() {
    return {
      isAuthenticated: false,
      authenticatedUsername: '',
    };
  },
  computed: {
    userIsAuthenticated() {
      return this.isAuthenticated;
    },
    username() {
      return this.authenticatedUsername;
    },
  },
  async created() {
    try {
      // Check if the user is authenticated using your authentication logic
      const user = await apiService.getCurrentUser();
      if (user) {
        this.isAuthenticated = true;
        this.authenticatedUsername = user.username;
      }
    } catch (error) {
      console.error('Authentication error:', error);
    }
  },
};
</script>

<style>
.topup {
  padding-top: 50px;
}
</style>
