export default {
    path:"/movie",
    name:"movie",
    //按需加载引入 ===》路由的懒加载
    component:()=>import("@pages/movie")
}