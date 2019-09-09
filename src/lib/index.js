import Header from "./header/index.vue"
import Bscroll from "./bscroll/index.vue";
const components = [
    Header,
    Bscroll
]


const install = (Vue)=>{
    if(Vue){
        components.map(item=>{
            Vue.component(item.name,item);
        })
    }
}

export default install;