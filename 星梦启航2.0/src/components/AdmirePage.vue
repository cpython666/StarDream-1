<script>
export default {
    components: {
        
    },
    data() {
        return {
            
        }
    },
    methods: {
        loadEvent(){
            window.$('.admire').hide()

            window.$('.wx_i').hide()

            window.$('.zfb').on('click', function(){
                window.$('.zfb').addClass('zfb_')
                window.$('.wx').removeClass('wx_')
                window.$('.wx_i').slideUp()
                window.$('.zfb_i').slideDown()
            })
            window.$('.wx').on('click', function(){
                window.$('.wx').addClass('wx_')
                window.$('.zfb').removeClass('zfb_')
                window.$('.zfb_i').slideUp()
                window.$('.wx_i').slideDown()

            })
            window.$('.close').on('click', function(){
                window.$('.admire').slideUp()
            });
        }
    },
    mounted() {
        this.loadEvent()
    }
}
</script>
<template>
<div class="admire">
    <div class="close">
        x
    </div>

    <div class="admirelist">
        <div class="zfb zfb_">支付宝</div>
        <div class="wx">微信</div>
    </div>
    <div>
        <div class="zfb_i">
            <img src="../assets/imgs/admire/2.jpg" />
        </div>
        <div class="wx_i">
            <img src="../assets/imgs/admire/1.jpg" />
        </div>
    </div>
    <span>
        鹏程万里，星梦同行！
    </span>

</div>
</template>

<style scoped>
.close{
    position: fixed;
    right: 10px;
    top: 10px;
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;

}
.close:hover{
    cursor: pointer;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
    color: red;
}
img{
    width: 250px;
}
.admire{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items:center;
    width: 500px;
    height: 500px;
    background-color: rgba(236, 239, 241,0.95);
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 9;
    transform: translate(-50%,-50%);
    border-radius:10px;
    padding:35px 10px;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}
.admire:hover{
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
}
.admirelist{
    display: flex;
    justify-content: center;
}
.admirelist div{
    padding: 8px 12px;
    margin: 8px 10px;
    background-color: rgb(241, 241, 241);
    color: black;
    cursor: pointer;
    border-radius: 8px;
}
.zfb_{
    background-color:#006EE8 !important;
    color: white !important;
}
.wx_{
    background-color:#27DB70 !important;
    color: white !important;
}
</style>