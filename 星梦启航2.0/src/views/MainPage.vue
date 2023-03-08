<template>


<video autoplay loop muted="" preload v-show="this.$store.state.isBgVideo">
<source :src="this.$store.state.bgVideoUrl[Math.floor(Math.random() * this.$store.state.bgVideoUrl.length)]">
</video>

<img id="bg" :src="this.$store.state.bgImageUrl[Math.floor(Math.random() * this.$store.state.bgImageUrl.length)]" v-show="this.$store.state.isBgImage"/>

<div id="main">
  <!-- <div id="left" v-show="!this.$store.state.isJianYue"> -->
  <div id="left">
    <SiderBox iconUrl="imgs/login.png" className="登录" @click="sendPri('登录功能尚未开发，敬请期待~')"/>
    <div id="sider">
      <SiderBox iconUrl="imgs/home.png" className="主页" @click="turn('index')"/>
      <SiderBox iconUrl="imgs/code.png" className="程序员" @click="turn('code')"/>
      <SiderBox iconUrl="imgs/design.png" className="设计" @click="turn('design')"/>
      <SiderBox iconUrl="imgs/fish.png" className="摸鱼" @click="turn('play')"/>
    </div>
    <div>
      <SiderBox iconUrl="imgs/coffee.png" className="" @click="showAdmire()"/>
      <SiderBox iconUrl="imgs/setting.png" className=""  @click="sendPri('设置功能尚未开发，敬请期待~')"/>
    </div>
  </div>
<AdmirePage/>
  <div id="right">
    <IndexPage></IndexPage>
  </div>
</div>

  </template>
<style scoped>

:root{
  --sider-size:50px;
  --sider-bgcolor:#0e0f0f;
}

#main{
  z-index: 1;
  display: flex;
  flex-direction:row;
}
#bg{
  width: 100vw;
  height:100vh;
    top: 0;
  left: 0;
  z-index: -1;
  position: absolute;
  background-repeat:no-repeat;
}
video {
  min-width: 100%;
  min-height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
#left{
  position: absolute;
  display: flex;
  flex-direction: column;;
  justify-content: space-between;
  width:70px;
  height: 100vh;
  background-color: #134B63;
  overflow: hidden;
  z-index: 9;
  opacity: 0.7;
}

#right{
  height:100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
<script>
import AdmirePage from '../components/AdmirePage.vue'
import SiderBox from '../components/SiderBox.vue'
import router from '../router'
import IndexPage from './IndexPage.vue'
  export default {
        components: { SiderBox, AdmirePage, IndexPage },

        data() {
            return {

            }
        },
        methods: {
          turnWeb(url){
            window.open(url)
          },
          showAdmire(){
            window.$('.admire').slideDown(500)
          },
          turn(url){
            router.replace(url)
          },
          sendPri(msg){
            window.$alerts.PrimaryAlert(msg)
          }
        }
        ,mounted(){
        }
    }
</script>