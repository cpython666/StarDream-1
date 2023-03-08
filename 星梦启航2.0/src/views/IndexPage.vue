<template>
<div id="indexmain">
    <div id="top">
        <div>
            <div class="sli" style="height:100px;display: none;"></div>
            <ShowTime @click="changeSider"/>
        </div>
        <div>
            <SearchBar/>
        </div>
        <div style="width:100vw;display:flex;justify-content:center;height: 100%;">
            <RouterView></RouterView>
        </div>
    </div>
    <div id="bottom">
        <SayingBar />
    </div>
</div>
</template>
      
<style scoped>

#indexmain{
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
}
#top{
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
}
#bottom{
    z-index: 10;
}
</style>

<script>
import ShowTime from '../components/ShowTime.vue';
import SearchBar from '../components/SearchBar.vue';
import SayingBar from '../components/SayingBar.vue';
import AppList from '../components/AppList.vue';
export default {
        data() {
            return {

            }
        },
        components:{ShowTime,SearchBar,SayingBar,AppList},
        methods: {
            changeSider(){
                if(window.$('#left').hasClass('hide')){
                    window.$('#left').stop(true).animate({left:0}).removeClass('hide')
                }else{
                    window.$('#left').stop(true).animate({left:-100}).addClass('hide')
                }
                window.$('.sli').stop(true).slideToggle(600);
                window.$('.apps').stop(true).slideToggle(600);
                this.$store.commit('changeSider')
            },
            turnWeb(url){
                window.open(url)
          },
        }
        ,mounted(){

        }
    }
</script>