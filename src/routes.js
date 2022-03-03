import Home from './components/Home.vue'
import Add from './components/Add.vue'
import Update from './components/Update.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import {
    createRouter,
    createWebHistory
} from 'vue-router'

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/'
    },
    {
        name: 'Add',
        component: Add,
        path: '/add'
    },
    {
        name: 'Update',
        component: Update,
        path: '/update'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: 'Login',
        component: Login,
        path: '/login'
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router