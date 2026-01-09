import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ServiceDetail from '../views/ServiceDetail.vue'
import ChefDetail from '../views/ChefDetail.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/service/:id',
        name: 'ServiceDetail',
        component: ServiceDetail
    },
    {
        path: '/chef/:id',
        name: 'ChefDetail',
        component: ChefDetail
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return { el: to.hash, behavior: 'smooth' }
        }
        return savedPosition || { top: 0 }
    }
})

export default router
