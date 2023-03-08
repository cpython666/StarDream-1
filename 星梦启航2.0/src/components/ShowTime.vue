<template>
  <KeepAlive> 
<div id="showtime" title="点击切换风格呦~">
    <div id="big" @click="changeFont">{{dateDay}}</div>
    <div id="small">
      {{dateYear}} {{dateWeek}} 
    </div>
</div>
</KeepAlive>
  </template>
  <style scoped>
#showtime{
    user-select:none; 
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 150px;
    color: white;
}
#big{
    font-size: 80px;
}
@font-face {
   font-family: electronicFont;
   src: url(../assets/fonts/DS-DIGIT.TTF);
}
</style>
   
  <script>
  import dayjs from "dayjs"

  export default {
    data () {
      return {
        dateDay: null,
        dateYear: null,
        dateWeek: null,
        weekday: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        timer:null
      };
    },
    methods:{
      // changeFont(){
      //   window.$("#showtime").css({'font-family':'electronicFont'})
      //   window.$("#big").css({'font-size':'105px'})
      // }
    },
    mounted () {
      this.timer =setInterval(() => {
          const date=dayjs(new Date())
          this.dateDay = date.format('HH:mm');
          this.dateYear = date.format('YYYY-MM-DD');
          this.dateWeek = date.format(this.weekday[date.day()]);
   
        }, 1000)
    },
    beforeDestroy(){
      if(this.timer){
        clearInterval(this.timer)
      }
    }
  };
  </script>