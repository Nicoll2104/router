import { createApp } from 'vue';
import { Quasar, QDialog } from 'quasar';
import App from './App.vue';
import { router } from './routes/routes.js';

import 'quasar/dist/quasar.css'; // Importa los estilos de Quasar
import '@quasar/extras/material-icons/material-icons.css'
const app = createApp(App);

app.use(router);

app.use(Quasar, {
  plugins: [QDialog] 
});

app.mount('#app');

