import {createRouter, createWebHistory} from "vue-router";
import Video from '../components/Video'

const history = createWebHistory();
const router = createRouter({
    history,
    routes: [
        {
            path: '/video',
            component: Video,
            // beforeEnter(to, from, next) {
            //     console.log(state.loggedIn)
            //     if(this.props.isLoggedIn === "") {
            //         next('/')
            //     }
            // }
        }
    ],


})


export default router