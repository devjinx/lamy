import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import { useStore } from './stores';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);

const store = useStore();

app.use(store);
app.mount('#app');
