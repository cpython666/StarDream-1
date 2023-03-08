<template>
<div id="search">
    <div id="engines">
        <img id='engine' src="../assets/imgs/engines/baidu.png" title="点我更换引擎" class="https://www.baidu.com/s?wd=">
        <img id='tri' src="../assets/imgs/engines/triangle.png">
    </div>
    <input id="search_input" :placeholder="sayings[Math.floor(Math.random() * sayings.length)]">
    <div id="to-search">
        <img src="../assets/imgs/engines/search.png">
    </div>
</div>
<div id="change">
    <div class='set' id="https://github.com/search?q=">
        <img src="../assets/imgs/engines/baidu.png">
        <div>百度</div>
    </div>

    <div class="set" id="https://github.com/search?q=">
        <img src="../assets/imgs/engines/github.png">
        <div>GitHub</div>
    </div>
    <div class="set" id="https://search.bilibili.com/all?keyword=">
        <img src="../assets/imgs/engines/bilibili.png">
        <div class="github">哔哩哔哩</div>
    </div>

    <div class="set" id="https://www.google.com/search?ie=UTF-8&q=">
        <img src="../assets/imgs/engines/google.png">
        <div class="github">Google</div>
    </div>
    <div class="set" id="https://juejin.cn/search?query=">
        <img src="../assets/imgs/engines/juejin.svg">
        <div class="github">掘金</div>
    </div>
    <div class="set" id="https://www.npmjs.com/search?q=">
        <img src="../assets/imgs/engines/npm.png">
        <div class="github">npm</div>
    </div>
    <div class="set" id="https://stackoverflow.com/nocaptcha?s=">
        <img src="../assets/imgs/engines/stackoverflow.png">
        <div class="github">StackOverflow</div>
    </div>

    <div class="set" id="https://so.toutiao.com/search?dvpf=pc&keyword=">
        <img src="../assets/imgs/engines/toutiao.png">
        <div class="github">头条搜索</div>
    </div>

    <div class="set" id="https://so.csdn.net/so/search?&t=&u=&q=">
        <img src="../assets/imgs/engines/csdn.jpg">
        <div class="github">CSDN</div>
    </div>

    <div class="set" id="https://search.gitee.com/?q=">
        <img src="../assets/imgs/engines/gitee.ico">
        <div class="github">Gitee</div>
    </div>
    <div class="set" id="https://zzk.cnblogs.com/s?w=">
        <img src="../assets/imgs/engines/bokeyuan.png">
        <div class="github">博客园</div>
    </div>



</div>
<div id="mask">

</div>
</template>
<style scope>
#mask{
    width: 100vw;
    height: 100vh;
    background-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    z-index:1
}
#change{
    position: absolute;
    margin-top: 5px;
    width: 560px;
    display: flex;
    flex-wrap: wrap;
    transform: all ease 0.3s;
    border-radius: 25px;
    padding: 10px 20px;
    background-color: #ececec;
    font-size: 10px;
    box-shadow: 0 0 10px 3px #00000029;
    z-index: 2;
}
.set{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    padding: 10px;
    border-radius: 8px;
    font-size: 10px;
}
.set:hover{
    background-color: #FFFFFF;
}

#change img{
    height: 25px;
    width: 25px;
}
#search{
    display: flex;
    width: 600px;
    height:50px;
    border-radius:25px ;
    background-color: #ececec;
    transition-duration: 0.3s;
    justify-content: center;
}
#search:hover{
    background-color: rgb(243, 243, 243);
    opacity: 0.9;
    box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
}

#search input{
    width: 500px;
    outline: none;
    border: none;
    background-color: transparent;
    padding-left: 20px;
    font-size: 14px;
}
#engines{
    width: 50px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: right;
    border-radius:25px 0 0 25px;
}
#engines:hover{
    background-color:white;
}
#engine{
    width:22px ;
    height: 22px;
}

#tri{
    margin-right: 5px;
    width: 12px;
    height: 12px;
    opacity: 0.15;
}
#to-search{
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:0 25px 25px 0;
}
#to-search:hover{
    background-color: white;
}
#to-search img{
    width:20px ;
    height: 20px;
}
</style>
<script>
  export default {
        components: {},

        data() {
            return {
                sayings:[
                    '漫漫星程,你我同行!',
                    '为万万同行者少走弯路,助力千万逐梦者向梦启航~'
                ]
            }
        },
        methods: {
            bindEnvent(){

                window.$('#change').hide()
                window.$('#mask').hide()

                window.$('#engines').on('click', function(){
                    window.$('#mask').show()
                    window.$('#change').slideDown()
                }),
                window.$('#mask').on('click', function(){
                    window.$('#mask').hide()
                    window.$('#change').slideUp()
                }),
                window.$('#to-search').click(function () {
                    if(!($('#search_input').val()==='')){
                        window.open($('#engine').attr('class')+$('#search_input').val());
                        window.$('#search_input').val('')
                    }else{
                        window.$alerts.WarningAlert('！ 搜索内容不能为空~')
                    }
                }),
                $('.set').click(function () {
                        var $id=$(this).attr('id')
                        var $src=$(this).children('img').attr('src')
                        $('#engine').attr('class',$id)
                        $('#engine').attr('src',$src)
                        window.$alerts.SuccessAlert('√ 切换引擎成功！')

                        window.$('#mask').hide()
                        window.$('#change').slideUp()
                })
                window.$('#search_input').on('keyup',function(event){
                    if(event.keyCode=='13'){            
                        $(this).parent().children('#to-search').trigger('click')
                    }
                })
            }

        }
        ,mounted(){
            this.bindEnvent()
        }
    }


</script>