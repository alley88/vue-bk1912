import Header from "./header/index.vue"

const components = [
    Header,
]


const install = (Vue)=>{
    if(Vue){
        components.map(item=>{
            Vue.component(item.name,item);
        })
    }
}

export default install;