import Vue from "vue";
import VueRouter from "vue-router"
import movie from "./movie";
import cinema from "./cinema"
import mine from "./mine"
Vue.use(VueRouter);


const router = new VueRouter({
    mode:"hash",
    routes:[
        {
            path:'/',
            redirect:"/movie",
        },
        movie,
        cinema,
        mine
    ]
})


export default router;