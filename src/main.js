import { createApp } from 'vue';
import { Quasar } from 'quasar';
import App from './App.vue';
import { router } from './routes/routes.js';

import 'quasar/dist/quasar.css'; 
import '@quasar/extras/material-icons/material-icons.css'

const app = createApp(App);

app.use(router);

app.use(Quasar, {
  config: {}, 
});

app.mount('#app');


