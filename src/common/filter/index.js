import Vue from "vue";

Vue.filter("toImg",(value,info)=>{
    return value.replace(/w\.h/,info)
})

