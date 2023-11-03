import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons' // You can import the specific icons you need

import App from './App.vue'
import router from './router'

library.add(faCoffee) // Add the imported icons to the library

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon) // Register the Font Awesome component for use in your Vue components

app.mount('#app')
