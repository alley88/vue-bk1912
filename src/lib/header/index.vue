<template>
    <div id="header">
        <v-touch tag="div" @tap="handleTo()"><slot></slot></v-touch >
        <div>{{title}}</div>
    </div>
</template>

<script>
export default {
    name:"Alley-Header",
    props:{
        title:{
            type:String,
            default:"猫眼电影"
        }
    },
    methods:{
        handleTo(){
            this.$router.back();
        }
    }
}
</script>


<style>
    #header{
        width: 100%;
        height: .88rem;
        background: #c33;
        display: flex;
        justify-content: center;
        align-items: center;
        color:#fff;
        font-size:.36rem;
        position: fixed;
        left:0;
        top:0;
        z-index:2;
    }
    #header div:nth-child(1){
        position: absolute;
        left:.3rem;
        font-size:.5rem;
    }
</style>