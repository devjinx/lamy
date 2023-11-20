import { defineStore } from 'pinia';

export const useStore = defineStore({
  id: 'mainStore', 
  state: () => ({
    user: {
      isAuthenticated: false,
      userProfile: null,
    },
  }),
  actions: {
    setUser(userData) {
      this.user.isAuthenticated = true;
      this.user.userProfile = userData;
    },
    clearUser() {
      this.user.isAuthenticated = false;
      this.user.userProfile = null;
    },
    // Other actions
  },
  getters: {
    getUserProfile() {
      return this.user.userProfile;
    },
    isAuthenticated() {
      return this.user.isAuthenticated;
    },
  },
});

export default useStore;
