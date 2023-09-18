import {createApp} from "vue";
import App from "./App.vue";
import {createPinia} from "pinia";
import "./assets/styles/styles.scss";

const API = process.env.VUE_APP_URL;
if (typeof API === 'string' && API.length > 0 ){
    createApp(App)
        .use(createPinia())
        .mount('#app');
}
