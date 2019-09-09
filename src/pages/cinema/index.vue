<template>
  <div>
    <Alley-Header />
    <div id="cinema_content">
    <div class="cinema_nav">
      <ul>
        <li>
          <span>全城</span>
          <i class="iconfont">&#xe627;</i>
        </li>
        <li>
          <span>全城</span>
          <i class="iconfont">&#xe627;</i>
        </li>
        <li>
          <span>全城</span>
          <i class="iconfont">&#xe627;</i>
        </li>
      </ul>
    </div>
    <CinemaContent/>
    </div>
  </div>
</template>

<script>
import CinemaContent from "@components/cinemaContent";
export default {
  name: "Ciname",
  components: {
    CinemaContent
  }
};
</script>

<style>
/*cinema*/
#cinema_content {
  position: absolute;
  width: 100%;
  height: 100%;
  padding-top: 1rem;
}
#cinema_content .cinema_nav {
  width: 100%;
  position: fixed;
  height: 0.92rem;
  border-bottom: 1px solid #ccc;
  z-index: 2;
  background: #fff;
}
#cinema_content .cinema_nav ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
#cinema_content .cinema_nav ul li {
  width: 100%;
  text-align: center;
  font-size: 0.3rem;
}
</style>