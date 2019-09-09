export default {
    path:"/movie",
    name:"movie",
    //按需加载引入 ===》路由的懒加载
    component:()=>import("@pages/movie"),
    children:[
        {
            path:"/movie",
            redirect:"/movie/movieNow"
        },
        {
            path:"movieNow",
            name:"movieNow",
            meta:{
                flag:true
            },
            component:()=>import("@components/movieNow")
        },
        {
            path:"movieComming",
            name:"movieComming",
            meta:{
                flag:true
            },
            component:()=>import("@components/movieComming")
        }
    ]
}