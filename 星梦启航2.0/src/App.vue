<script>
import MainPage from './views/MainPage.vue'
export default {
    components: {MainPage},
    data() {
      return {
        visible:false,
        top: 0,
        left: 0,
      };
    },
    methods: {
      openMenu(e) {
        var w=window.screen.width
        var h=window.screen.height
        console.log(w,h)
        var x = e.pageX; 
        var y = e.pageY; 
        console.log(x,y)

        this.left = x;
        this.top = y;
        console.log(w-x)
        if(w-x<180){
          this.left=x-162
        }
        if(h-y<250){
          this.top=y-104
        }

        this.visible = true;
      },
      closeMenu() {
        this.visible = false;
      },
      saveImg(){
            var download = function (href, name) {
            let eleLink = document.createElement('a')
            eleLink.download = name
            eleLink.href = href
            eleLink.click()
            eleLink.remove()
            }

            var downloadByBlob = function (url) {
            var name=url.split('/').slice(-1)
            var type=url.split('.').slice(-1)
            if (type == 'zip') {
                window.open(url)
            } else {
                let image = new Image()
                image.setAttribute('crossOrigin', 'anonymous')
                image.src = url
                image.onload = () => {
                let canvas = document.createElement('canvas')
                canvas.width = image.width
                canvas.height = image.height
                let ctx = canvas.getContext('2d')
                ctx.drawImage(image, 0, 0, image.width, image.height)
                canvas.toBlob((blob) => {
                    let url = URL.createObjectURL(blob)
                    download(url, name)
                    // 用完释放URL对象
                    URL.revokeObjectURL(url)
                })
                }
            }
        }


        var url;
        if(this.$store.state.isBgImage) {
            // url=this.$store.state.bgImageUrl
            url=window.$('#bg').attr('src')
        }else{
          // console.log(window.$('source').attr('src'))
            // url=window.$('source').attr('src')
            window.$alerts.WarningAlert('视频无法通过此途径下载')
            return
        }
        downloadByBlob(url)
      },
      sendPri(msg){
            window.$alerts.PrimaryAlert(msg)
          },
          change(){
            localStorage.setItem("img", !this.$store.state.isBgImage)
            this.$store.commit('changeState')
          }

    },
    mounted(){
      var bg=JSON.parse(localStorage.getItem("img"));
      if(bg!=this.$store.state.isBgImage){
        this.$store.commit('changeState')
      }
    }

  };

</script>

<template>
<div id="page" @click="this.closeMenu()" @contextmenu.prevent.native="this.openMenu($event)">
    
    <MainPage/>
    <ul
    v-show="visible"
    :style="{ left: left + 'px', top: top + 'px' }"
    class="contextmenu">

    <li>
        <div>更换壁纸</div>
        <div class="imgs">
            <img src="./assets/imgs/download.png" title="下载壁纸" @click="saveImg"/>
            <img src="./assets/imgs/change.png" title="更换壁纸" @click="change()"/>
        </div>
    </li>
    <li   @click="sendPri('保存功能尚未开发，敬请期待~')">
        <div>保存配置</div>
        <img src="./assets/imgs/cloud.png"/>
    </li>
    <li  @click="sendPri('设置功能尚未开发，敬请期待~')">
        <div>设置</div>
        <img src="./assets/imgs/setting.png"/>
    </li>
    </ul>
</div>
</template>

<style scoped>
.contextmenu {
    margin: 0;
    background: #091C24;
    position: fixed;
    list-style-type: none;
    box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
    z-index: 10;
    width: 150px;
    padding: 6px 6px;
    border-radius:12px;
    font-size: 12px;
    font-weight: 400;
    color: white;
  }
  li{
    cursor: pointer;
    padding: 6px 9px;
    display: flex;
    align-items: center;
    justify-content:space-between;
    height: 20px;
    border-radius: 10px;
    font-size: 12px;
  }
  li:hover{
    background-color: #22333B;
  }
  .imgs{
    display: flex;
    justify-content: right;
  }
li img{
    transition: all ease 0.5s;
    width: 20px;
    height: 20px;
    margin: 0 0 0 5px;
}

li img:hover{
    transform: scale(1.1);
}
</style>
