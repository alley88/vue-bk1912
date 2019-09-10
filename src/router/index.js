import Vue from "vue";
import VueRouter from "vue-router"
import movie from "./movie";
import cinema from "./cinema"
import mine from "./mine"
import city from "./city"
import search from "./search"
import detail from "./detail"
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
        mine,
        city,
        search,
        detail
    ]
})


export default router;