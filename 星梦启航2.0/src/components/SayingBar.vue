<script>
export default {
    data() {
        return {
            sayingData:[]
        }
    },
    methods: {
        copySaying(){
                const input = document.createElement('input');
                document.body.appendChild(input);
                input.setAttribute('value',this.sayingData['content']+'--'+this.sayingData['from']+' · '+this.sayingData['from_who']) 
                input.select();
                if (document.execCommand('copy')) {
                    document.execCommand('copy');
                    window.$alerts.SuccessAlert('√ 复制成功！');
                }
            document.body.removeChild(input);
        },
        loadSaying(){
            var _this = this
            window.$.get('./src/assets/json/sayingi.json',function(res){
                _this.sayingData=res.data
                _this.sayingData=_this.sayingData[Math.floor(Math.random() * _this.sayingData.length)]
                window.$('.saying').text('「 '+_this.sayingData['content']+'」')
                window.$('.from').text('—'+_this.sayingData['from']+' · '+_this.sayingData['from_who'])
            })
        }
    },
    mounted() {
        this.loadSaying()
    }
}
</script>
<template>
<div class="say" @click="copySaying">
    <div class="saying">
        111111111111111111
    </div>
    <div class="from">
    </div>
</div>
</template>

<style scoped>
.say{
    color: white;
    height: 50px;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select:none; 
    z-index: 9;
}
.from{
   opacity: 0;
   transition: all ease 0.5s;
   font-size: 8px;
}
.from:hover{
    opacity: 1;
}
</style>
