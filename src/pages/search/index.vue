<template>
  <div>
    <Alley-Header>
      <p>&lt;</p>
    </Alley-Header>
    <div id="content">
      <div class="search_movie_body">
      <div class="search_movie_input">
        <input type="text" v-model="movieName"/>
      </div>
      <h2>电影/电视剧/综艺</h2>
      <div class="movie_item" v-for="(item,index) in searchList" :key="index">
        <div class="movie_item_pic">
          <img :src="item.img | toImg('128.180')" />
        </div>
        <div class="movie_item_info">
          <h2>{{item.nm}}</h2>
          <p>
            <span class="person">{{item.wish}}</span>人想看
          </p>
          <p>
            主演：
            <span>{{item.star}}</span>
          </p>
          <p>
            <span>{{item.pubDesc}}</span>
          </p>
        </div>
        <div class="movie_item_btn person">想看</div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import {movieSearch} from "@api"
import {mapState} from "vuex";
import {throttle} from "@utils"
export default {
  name:"Search",
  data(){
    return {
      movieName:"",
      searchList:[]
    }
  },
  created(){
    this.searchFn = throttle( async (newVal)=>{
       let data =await movieSearch(this.cityId,newVal);
        
        if(data.data.movies){
          this.searchList = data.data.movies.list
        }
    })
  },
  computed:{
    ...mapState({
      cityId:state=>state.city.id
    })
  },
  watch:{
  movieName(newVal,oldVal){
      if(newVal == oldVal)return;
      
         this.searchFn(newVal);
    }
  }
}
</script>
<style>
/*movie_body*/
#content .search_movie_body {
  height: 100%;
  padding-bottom: 1rem;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  padding-top: .88rem;
  overflow-x: hidden;
}

#content .search_movie_body .search_movie_input {
  padding: 0.16rem 0.2rem;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e5e5e5;
}
#content .search_movie_body .search_movie_input > input {
  border: none;
  font-size: 0.3rem;
  color: #333;
  padding: 0.1rem 0;
  outline: none;
  margin-left: 5px;
  width: 100%;
}
#content .search_movie_body > h2 {
  font-size: 0.3rem;
  color: #999;
  padding: 0.18rem 0;
  border-bottom: 1px solid #e6e6e6;
}
#content .search_movie_body .movie_item {
  padding: 0.2rem 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
#content .search_movie_body .movie_item .movie_item_pic {
  width: 1.28rem;
  height: 1.8rem;
}
#content .search_movie_body .movie_item .movie_item_pic img {
  width: 100%;
  height: 100%;
}
#content .search_movie_body .movie_item .movie_item_info {
  margin-left: 0.2rem;
  flex: 1;
  height: 100%;
}
#content .search_movie_body .movie_item .movie_item_info h2 {
  font-size: 0.34rem;
  line-height: 0.5rem;
  width: 3rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
#content .search_movie_body .movie_item .movie_item_info p {
  font-size: 0.26rem;
  line-height: 0.45rem;
  color: #666;
  width: 4rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
#content .search_movie_body .movie_item .movie_item_info p .person {
  font-weight: 700;
  color: #faaf00;
  font-size: 0.3rem;
}

#content .search_movie_body .movie_item .movie_item_btn {
  width: 1rem;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  color: #fff;
  border-radius: 4px;
  font-size: 0.26rem;
  cursor: pointer;
}
#content .search_movie_body .movie_item > .person {
  background-color: #faaf00;
}
</style>