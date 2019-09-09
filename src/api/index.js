import http from "@utils/http.js"

//正在热映
export const movieNowApi = (id=10)=> http({
    method:"get",
    url:"/api/movieOnInfoList",
    data:{
        cityId:id
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

