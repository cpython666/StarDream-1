<script>
import AppBox from './AppBox.vue'
export default {
    components: {AppBox},
    data() {
        return {
            apps:[]
        }
    },
    methods: {
         
        loadEvent(){
            // 判断屏幕大小适合的app显示列数
            // console.log(window.screen.width)
            // console.log(window.screen.width*0.7)
            var column=Math.floor((window.screen.width*0.7)/90)
            var value='repeat('+column+',100px)'
            window.$('.apps').css('grid-template-columns',value)

        },
        // getIndex(){
        //     var _this=this;
        //     this.$http.get('./src/assets/json/apps.json').then(function(res){
        //         _this.apps=res.data.data
        //         _this.$store.commit('computeAppNum',res.data.data.length)
        //     })
        // },
    },
    mounted() {
        this.loadEvent()
        // this.getIndex()
    }
}
</script>
<template>
<div class="apps">
    
    <AppBox v-for="app_ in apps" :app="app_"/>

</div>
</template>

<style scoped>
.apps{
    margin-top:20px;
    display: grid;
    width: 70%;
    height:380px;
    grid-template-rows: repeat(8,85px);
    justify-content: space-around;
    grid-row-gap:10px;

    grid-template-columns: repeat(9,85px);

    overflow: auto;
}
::-webkit-scrollbar{width:0;}
</style>
