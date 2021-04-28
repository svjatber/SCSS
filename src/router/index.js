import { createRouter, createWebHistory} from 'vue-router';
import Home from "../views/Home";
import Project from "../views/Project";
import About from "../views/About";
import Contact from "../views/Contact";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', component: Home
        },
        {
            path: '/project', component: Project
        },
        {
            path: '/about', component: About
        },
        {
            path: '/contact', component: Contact
        }
    ]
})
export default router
