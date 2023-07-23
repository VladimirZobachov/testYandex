import {createApp} from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './components/App/App.vue'
import Main from './components/Main/Main.vue'
import Register from './components/Register/Register.vue'
import Login from './components/Login/Login.vue'
import Profile from './components/Profile/Profile.vue'
import Popup from './components/Popup/Popup.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Main },
    { path: '/signup', component: Register },
    { path: '/signin', component: Login },
    { path: '/profile', component: Profile },
    { path: '/popup', component: Popup },
  ],
});

const app = createApp(App);

app.use(router);
app.mount('#app');