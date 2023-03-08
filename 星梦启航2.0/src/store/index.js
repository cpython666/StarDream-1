import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
      // static: 'http://www.stardream.vip/stardream/assets/',
      static:'./src/assets/',

      isBgVideo: false,
      bgVideoUrl:['./src/assets/videos/0.mp4','./src/assets/videos/1.mp4','./src/assets/videos/2.mp4','./src/assets/videos/3.mp4',
      './src/assets/videos/4.mp4','./src/assets/videos/5.mp4','./src/assets/videos/6.mp4','./src/assets/videos/7.mp4',
      './src/assets/videos/8.mp4','./src/assets/videos/9.mp4',],
      isBgImage:true,
      bgImageUrl:['./src/assets/imgs/bgimage/1.jpg','./src/assets/imgs/bgimage/1.png','./src/assets/imgs/bgimage/2.png','./src/assets/imgs/bgimage/3.png'],
      isJianYue:false,
      appNum:0
    }
  },
  mutations: {
    changeState(state) {
      state.isBgVideo=!state.isBgVideo
      state.isBgImage=!state.isBgImage
    },
    turnWeb(state,url){
      window.open(url)
    },
    changeSider(state){
      state.isJianYue=!state.isJianYue
    },
    computeAppNum(state,num){
      state.appNum=num
    }
  },
  actions:{
  }
})
export default store