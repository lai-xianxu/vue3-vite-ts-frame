import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';
import globalComponents, { globalMount } from './utils/global';

const app = createApp(App);
app.use(router).use(store).use(globalComponents).mount('#app');
globalMount(app);
