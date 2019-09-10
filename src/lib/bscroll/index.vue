<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>


<script>
import BScroll from "better-scroll";
export default {
    name:"Alley-Bscroll",
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper,{
            //开启下拉刷新
            pullDownRefresh:true,
            //开启上拉加载更多
            pullUpLoad:true,
            tap:true,
            click:true,
            scrollX:true
        });
    },
    methods:{
        //下拉刷新
        handlepullingDown(cb){
            this.scroll.on("pullingDown",()=>{
                cb()
            })
        },
        //下拉刷新后通过bscroll可以做下一次请求，
        handlefinishPullDown(){
            this.scroll.finishPullDown();
            //并且重新计算滚动区域的高度
            this.scroll.refresh();
        },
        //上拉加载更多
        handlepullingUp(cb){
            this.scroll.on("pullingUp",()=>{
                cb();
            })
        },
        //上拉加载更多后通过bscroll可以做下一次请求
        handlefinishPullUp(){
        
            this.scroll.finishPullUp();
            //并且重新计算滚动区域的高度
            this.scroll.refresh();
         
        },
        //滚动到指定位置
        handleScrollTop(t){
            this.scroll.scrollTo(0,-t,300)
        }
    }
}
</script>

<style>
    .wrapper{
        height: 100%;
    }
</style>