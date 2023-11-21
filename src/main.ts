import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Tailwind from 'primevue/passthrough/tailwind'

import Button from 'primevue/button'
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice'
import App from './App.vue'

const app = createApp(App)

app.use(PrimeVue, { unstyled: true, pt: Tailwind })
app.use(ToastService)
app.component('Button', Button)
app.component('Toast', Toast)

app.mount('#app')
