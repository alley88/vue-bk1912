export default {
    path:"/cinema",
    name:"cinema",
    //按需加载引入 ===》路由的懒加载
    component:()=>import("@pages/cinema")
}