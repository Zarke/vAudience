import {createRouter, createWebHistory} from "vue-router";
import Video from '../components/Video'

const history = createWebHistory();
const router = createRouter({
    history,
    routes: [
        {
            path: '/video',
            component: Video,
        }
    ],


})


export default router