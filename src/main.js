import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';

const app = createApp(App);

// Use Pinia for state management
app.use(createPinia());

// Use Vue Router
app.use(router);

// Register FontAwesome component globally
app.component('font-awesome-icon', FontAwesomeIcon);

// Check for authentication token in local storage
const authToken = localStorage.getItem('authToken');
if (authToken) {
  // If an auth token exists in local storage, assume the user is logged in
  // Redirect to the home page
  router.push('/');
}
// Mount the app to the element with id 'app'
app.mount('#app');