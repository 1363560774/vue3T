import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import 'amis/sdk/sdk.js';
import 'amis/lib/themes/default.css';

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
