import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedState from "pinia-plugin-persistedstate";
import vue3GoogleLogin from "vue3-google-login";

import "./assets/main.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedState);

app.use(pinia);
app.use(router);
app.use(vue3GoogleLogin, {
  clientId:
    "630963405175-57r6dghbqe7j7grk77o78rg4r9ss5mu5.apps.googleusercontent.com",
});

app.mount("#app");
