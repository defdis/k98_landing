import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/css/style.css'
import './assets/css/variables.css'
import './assets/css/utilities.css'
import './assets/css/components.css'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
