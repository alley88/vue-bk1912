import http from "@utils/http.js"

//正在热映
export const movieNowApi = ()=> http({
    method:"get",
    url:"/api/movieOnInfoList",
    data:{
        cityId:10
    }
})

//即将上映
export const movieCommingApi = ()=>http({
    method:"get",
    url:"/api/movieComingList",
    data:{
        cityId:10
    }
})

