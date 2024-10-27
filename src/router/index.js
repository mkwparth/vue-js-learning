import HomeView from "@/views/HomeView.vue";
import JobAddView from "@/views/JobAddView.vue";
import JobsView from "@/views/JobsView.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
        },
        {
            path: '/jobs/add',
            name: 'jobAdd',
            component: JobAddView,
        },
    ]
})

export default router;