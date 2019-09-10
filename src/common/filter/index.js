import Vue from "vue";

Vue.filter("toImg",(value,info)=>{
    if(value){
        return value.replace(/w\.h/,info)
    }
    
})

