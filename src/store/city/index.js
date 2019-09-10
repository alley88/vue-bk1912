import {getCity} from "@api/city";
const state = {
    hotCity :[],
    cityList: []
}

const mutations = {
    handleMutationGetCity(state,params){
        let city = params.cities
        /*
            城市id  城市name
            
            hotCity = [{id:id,name:name}]
            cityList = [
                    {index:A,list:[{id,name}]}
                    {index:B,list:[{id,name}]}
                    {index:c，list:[]}
                ]

        */
        let hotCity = [],cityList = [];
        //热门城市
        for(var i=0;i<city.length;i++){
            if(city[i].isHot){
                hotCity.push({id:city[i].id,nm:city[i].nm})
            }
        }

        //城市列表

        /*
           判断当前城市的首字母是否在cityList中存在，如果存在则将当前城市添加到对应得list里面 
           如果当前城市下标不存在则需要创建一个新的对象，创建新的下标 并且将当前城市传递到list里面
        
        */

        for(var i=0;i<city.length;i++){
            let first = city[i].py.slice(0,1).toUpperCase()

            if(isIndex(first)){
                cityList.push({index:first,list:[{id:city[i].id,nm:city[i].nm}]})
            }else{

                for(var j=0;j<cityList.length;j++){
                    if(first == cityList[j].index){
                        cityList[j].list.push({id:city[i].id,nm:city[i].nm});
                        break;
                    }
                }
            }
        }

        //判断当前首字母是否在cityList中存在

        function isIndex(first){
            var bStop = true;
            for(var i=0;i<cityList.length;i++){
                if(cityList[i].index == first){
                    bStop = false;
                    break;
                }
            }
            //如果存在为false  不存在为true
            return bStop;
        }

        //城市排序
        cityList.sort((a,b)=>{
            if(a.index>b.index){
                return 1;
            }else{
                return -1;
            }
        })


        state.hotCity = hotCity;
        state.cityList = cityList;

      
        

        




    }
}

//异步的处理
const actions = {
    async handleGetCity({commit}){
        let data = await getCity();
        commit("handleMutationGetCity",data.data)
    }
}



export default {
    state,
    actions,
    mutations,
    namespaced:true
}