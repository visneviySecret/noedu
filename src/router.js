import { createRouter, createWebHistory } from 'vue-router'
import Home from './router/home.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/',
        name: 'HomePhilosophy',
        component: Home
    },
    {
        path: '/',
        name: 'HomeAbout',
        component: Home
    },
    {
        path: '/',
        name: 'HomeServices',
        component: Home
    },
    {
        path: '/',
        name: 'HomeContacts',
        component: Home
    },
    {
        path: '/save-yourself',
        name: 'save-yourself',
        component: () => import('./router/page1.vue')
    },
    {
        path: '/ideal-not-fairy',
        name: 'ideal-not-fairy',
        component: () => import('./router/page2.vue')
    },
    {
        path: '/ideas-war',
        name: 'ideas-war',
        component: () => import('./router/page3.vue')
    },
    {
        path: '/vk',
        beforeEnter() { location.href = 'https://vk.com/shershnevdmitry' },
    },
    {
        path: '/youtube',
        beforeEnter() { location.href = 'https://www.youtube.com/channel/UCQuC7BqwkOxQ4bDjFV5qBwQ/videos' },
    },
    {
        path: '/twitter',
        beforeEnter() { location.href = 'https://twitter.com/d_shershnev' },
    },
    {
        path: '/inst',
        beforeEnter() { location.href = 'https://www.instagram.com/shershnev_d/' },
    },
    {
        path: '/blog',
        beforeEnter() { location.href = 'https://noedu.tumblr.com/' },
    },
    {
        path: '/website',
        beforeEnter() { location.href = 'https://www.shershnevdmitry.ru' },
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to) {
        if (document.getElementById(to.name)) {
            document.getElementById(to.name).scrollIntoView({ behavior: 'smooth' });
        } else {
            document.getElementById('app').scrollIntoView();
        }

    }
})

export default router