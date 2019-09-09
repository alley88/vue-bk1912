<template>
  <div>
    <!-- 头部 -->
    <Alley-Header />
    <div id="content">
      <!-- 首页的导航开始 -->
      <div class="movie_menu">
        <router-link to="/city" tag="div" class="movie_menu_city">
          <span>北京</span>
          <i class="iconfont">&#xe627;</i>
        </router-link>
        <ul class="movie_menu_switch">
          <router-link tag="li" to="/movie/movieNow">正在热映</router-link>
          <router-link tag="li" to="/movie/movieComming">即将上映</router-link>
        </ul>
        <router-link to="/search" class="movie_meun_search">
          <i class="iconfont">&#xe613;</i>
        </router-link>
      </div>
      <!-- 导航结束的部分 -->
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "Movie"
};
</script>

<style>
#content {
  position: absolute;
  width: 100%;
  height: 100%;
  padding-top: .88rem;
  padding-bottom: 1rem;
}

/*movie_menu*/
#content .movie_menu {
  width: 100%;
  height: 0.9rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.4rem;
  border: 1px solid #e6e6e6;
  position: fixed;
  z-index:2;
  left: 0;
  top:.88rem;
}
#content .movie_menu .movie_menu_city span {
  font-size: 0.3rem;
}

#content .movie_menu .movie_menu_city i {
  font-size: 0.3rem;
}
#content .movie_menu .movie_meun_search i {
  font-size: 0.4rem;
  font-weight: 900;
  color: #e54847;
}
#content .movie_menu .movie_menu_switch {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#content .movie_menu .movie_menu_switch li {
  height: 100%;
  line-height: 0.9rem;
  padding: 0 0.2rem;
  font-size: 0.3rem;
}

#content .movie_menu .movie_menu_switch .router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
</style>