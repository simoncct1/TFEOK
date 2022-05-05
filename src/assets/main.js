import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'

import App from '../components/App.vue'
const router = createRouter( {
    history : createWebHistory(),
    routes: [
        {path: '/', name:'home' ,component: Home},
        {path: '/about', name:'about' ,component: About}
    ]

})
createApp(App).use(router).mount('#app')
