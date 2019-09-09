<template>
  <div class="city_body">
    <!--热门城市-->
    <div class="hot_city">
      <div class="hot_title">热门城市</div>
      <div class="hot_city_list">
        <div class="hot_city_name">北京</div>
        <div class="hot_city_name">北京</div>
        <div class="hot_city_name">北京</div>
        <div class="hot_city_name">北京</div>
        <div class="hot_city_name">北京</div>
      </div>
    </div>
    <!--城市列表-->
    <div class="city_list">
      <div class="city_list_item">
        <div class="city_title_letter">A</div>
        <div class="city_list_name">
          <div class="city_list_name_item">北京</div>
          <div class="city_list_name_item">北京</div>
          <div class="city_list_name_item">北京</div>
          <div class="city_list_name_item">北京</div>
          <div class="city_list_name_item">北京</div>
          <div class="city_list_name_item">北京</div>
          <div class="city_list_name_item">北京</div>
        </div>
      </div>
      <div class="city_list_item">
        <div class="city_title_letter">A</div>
        <div class="city_list_name">
          <div class="city_list_name_item">北京</div>
          <div class="city_list_name_item">北京</div>
          <div class="city_list_name_item">北京</div>
          <div class="city_list_name_item">北京</div>
          <div class="city_list_name_item">北京</div>
          <div class="city_list_name_item">北京</div>
          <div class="city_list_name_item">北京</div>
        </div>
      </div>
      <div class="city_list_item">
        <div class="city_title_letter">A</div>
        <div class="city_list_name">
          <div class="city_list_name_item">北京</div>
          <div class="city_list_name_item">北京</div>
          <div class="city_list_name_item">北京</div>
          <div class="city_list_name_item">北京</div>
          <div class="city_list_name_item">北京</div>
          <div class="city_list_name_item">北京</div>
          <div class="city_list_name_item">北京</div>
        </div>
      </div>
    </div>
    <!--城市列表下标-->
    <div class="city_list_index">
      <div class="index_item">A</div>
      <div class="index_item">B</div>
      <div class="index_item">C</div>
      <div class="index_item">D</div>
      <div class="index_item">E</div>
    </div>
  </div>
</template>


<style>
.city_body {
  background: #ebebeb;
}

/*热门城市*/
.hot_title,
.city_title_letter {
  line-height: 0.6rem;
  padding-left: 0.26rem;
  font-size: 0.28rem;
}

.hot_city_list,
.city_list_name {
  width: 96%;
  background: #f5f5f5;
  padding-bottom: 0.16rem;
  padding-right: 0.6rem;
  display: flex;
  flex-wrap: wrap;
}
.hot_city_name {
  margin-top: 0.3rem;
  margin-left: 0.26rem;
  width: 1.9rem;
  height: 0.66rem;
  background: #fff;
  text-align: center;
  line-height: 0.66rem;
  font-size: 0.28rem;
  border: 2px solid #e6e6e6;
}

.city_list > div {
  width: 100%;
}
.city_list_name_item {
  line-height: 0.9rem;
  margin-left: 0.26rem;
  width: 100%;
  border-bottom: 2px solid #e6e6e6;
  font-size: 0.28rem;
}

/*城市列表下标*/
.city_list_index {
  position: fixed;
  right: 0;
  top: 1rem;
}
.city_list_index > div {
  padding: 0.1rem 0.05rem;
  font-size: 0.25rem;
}
</style>