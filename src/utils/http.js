import axios from "axios";
import loading from "@lib/loading/index.js"

const http = axios.create({
    timeout:10000,
    withCredentials:true
})

//拦截器
http.interceptors.request.use(config=>{
    if(config.method == "get"){
        config.params = {...config.data};
    }else if(config.method == "post"){
        //config.headers["content-type"] = "application/x-www-form-urlencoded"
    }
    loading.open();
    return config;
},err=>{
    return Promise.reject(err);
})


http.interceptors.response.use(res=>{
    if(res.status == 200){
       loading.close();
        return res.data;
    }
})

export default http;

