import Home from './components/Home.vue';
import Add from './components/Add.vue';
import Update from './components/Update.vue';
import SignUp from './components/SignUp.vue';
import Login from './components/Login.vue';
import PageNotFound from './components/PageNotFound.vue';
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
        path: '/update/:id'
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
    }, 
    {
        name: 'PageNotFound',
        path: '/:pathMatch(.*)*',
        component: PageNotFound
    }

]


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router