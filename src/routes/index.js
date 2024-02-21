import {createRouter, createWebHistory} from 'vue-router';

import HomePage from "./../components/HomePage.vue";
import Events from "./../components/Events.vue";
import AboutUs from "./../components/AboutUs.vue";
import Courses from "./../components/Courses.vue";
import Library from "./../components/Library.vue";
import Patnership from "./../components/Patnerships.vue";
import Alumni from "./../components/Alumni.vue";
import ContactUs from "./../components/ContactUs.vue";



const routes = [
    {
        path: '/',
        name: 'homepage',
        component: HomePage,
    },
    {
        path: '/events',
        name: 'events',
        component: Events,
    },
    {
        path: '/aboutus',
        name: 'aboutUs',
        component: AboutUs,
    },
    {
        path: '/courses',
        name: 'courses',
        component: Courses,
    },
    {
        path: '/library',
        name: 'library',
        component: Library,
    },
    {
        path: '/patnerships',
        name: 'patnerships',
        component: Patnership,
    },
    {
        path: '/alumni',
        name: 'alumni',
        component: Alumni,
    },
    {
        path: '/contactus',
        name: 'contactUs',
        component: ContactUs,
    }
]

 

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
