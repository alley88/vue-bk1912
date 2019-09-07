export default {
    path:"/mine",
    name:"mine",
    //按需加载引入 ===》路由的懒加载
    component:()=>import("@pages/mine")
}