<template>
  <div>
    <Alley-Header :title="detailMovie.nm">
      <p>&lt;</p>
    </Alley-Header>
    <div id="content">
      <div class="detail_body">
        <div class="detail_movie_bg"
        :style="{background:'url('+(detailMovie.img?detailMovie.img.replace(/w\.h/,'128.180'):'')+')'}"
        ></div>
        <div class="detail_movie_content">
          <div class="detail_movie_content_bg">
            <img :src="detailMovie.img | toImg('128.180')"/>
          </div>
          <div class="detail_movie_content_info">
            <h2>{{detailMovie.nm}}</h2>
            <p>{{detailMovie.enm}}</p>
            <p>{{detailMovie.cat}}</p>
            <p>{{detailMovie.pubDesc}}</p>
            <p>
              <span>{{detailMovie.wish}}想看---</span>
              <span>主题曲:{{detailMovie.musicStar}}</span>
            </p>
            <p></p>
          </div>
        </div>
      </div>
      <div class="detail_info">
        <p>{{detailMovie.dra}}</p>
      </div>
      <div class="detail_movie_performer">
        <Alley-Bscroll>
          <ul>
            <li class="star_photo" v-for="(item,index) in detailMovie.photos" :key="index">
              <div>
                <img :src="item | toImg('130.180')"/>
              </div>
            </li>
          </ul>
         </Alley-Bscroll>
      </div>
    </div>
  </div>
</template>


<script>
import {movieDetail} from "@api";
export default {
  name:"Detail",
  async activated(){
    let {id} = this.$route.params;
    let data = await movieDetail(id);
    console.log(data.data.detailMovie);

    this.detailMovie = data.data.detailMovie;
  },
  data(){
    return {
      detailMovie:{}
    }
  }
};
</script>

<style>
/*content*/
#content {
  position: absolute;
  width: 100%;
  height: 100%;
  padding-top: .88rem;
  padding-bottom: 1rem;
}

/*detail_body*/

.detail_body {
  position: relative;
  height: 4rem;
  width: 100%;
  overflow: hidden;
}
.detail_body .detail_movie_bg {
  width: 100%;
  height: 100%;

  background-size: cover;
  filter: blur(30px);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}
.detail_body .detail_movie_content {
  position: absolute;
  width: 100%;
  z-index: 2;
  left: 0;
  top: 0;
  display: flex;

  align-items: center;
}
.detail_body .detail_movie_content .detail_movie_content_bg {
  width: 2rem;
  height: 3rem;
  margin: 0.4rem;
}
.detail_body .detail_movie_content .detail_movie_content_bg > img {
  width: 100%;
  height: 100%;
  border: 4px solid #ccc;
}
.detail_body .detail_movie_content .detail_movie_content_info {
  color: #fff;
}
.detail_body .detail_movie_content .detail_movie_content_info h2 {
  font-size: 0.4rem;
  font-style: normal;
  line-height: 0.8rem;
}
.detail_body .detail_movie_content .detail_movie_content_info p {
  font-size: 0.26rem;
  line-height: 0.46rem;
  color: #ccc;
}

#content .detail_info {
  padding: 0.1rem;
  font-size: 0.3rem;
}
#content .detail_movie_performer {
  position: relative;
  width: 100%;
  margin: 0.4rem;
}

#content .detail_movie_performer ul .star_photo {
  width: 1.3rem;
  height: 1.8rem;
  margin: 0.1rem;
}

#content .detail_movie_performer ul .star_photo img {
  width: 1.3rem;
  height: 1.8rem;
}
#content .detail_movie_performer ul {
  display: flex;
  width: max-content;
}
#content .detail_movie_performer > ul li {
  margin-right: 0.4rem;
  text-align: center;
  flex-shrink: 0;
}

#content .detail_movie_performer > ul li div {
  margin-bottom: 0.1rem;
}
#content .detail_movie_performer > ul li p {
  fonr-size: 0.2rem;
  line-height: 0.3rem;
}
</style>