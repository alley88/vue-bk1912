import http from "@utils/http.js"

export const getCity = ()=>http({
    method:"get",
    url:"/api/cityList"
})