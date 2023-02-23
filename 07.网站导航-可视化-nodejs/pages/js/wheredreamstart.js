$(function () {

    // 今日待办模块
    $('.prepare .addtask').on('keyup', function(e){
        if(e.keyCode ==13 && $(this).val() !=''){
            // console.log('1')
            var $task = $("<div class='task'></div>").text($(".prepare .addtask").val());
            var $del = $("<img class='delete' src=\"./images/other-icos/delete.png\">").click(function(){
                var p = $(this).parent();
                p.fadeOut(function(){
                p.remove();
                });
          });

          var $check = $("<img class='check' src=\"./images/other-icos/co.png\">").click(function(){
                var p = $(this).parent();
                p.fadeOut(function(){
                    $smile=$('<img class=\'check\' src=\"./images/other-icos/smile.png\">').click(function(){
                        InsertMsg('你真棒!!!')
                    })
                    p.append($smile)
                $(".complete").append(p);
                p.fadeIn();
                });
                $(this).remove();
          });

          $task.append($del,$check);
          $(".notcomplete").append($task);
            //to clear the input
          $(".addtask").val("");
        }
    })

    // 简约模块
$('.main-title').find('a').click(function () {
    if(!($('.main-title #simple').hasClass('active'))){
        $('.simple .simple-main').empty()
        // console.log($('.simple .simple-main'))
    }
})

// 点击simple时获取mypage下的卡片列表，如果不是去添加和保存配置，则显示卡片
$('#simples').click(function () {
    var $cards=$('.mypage .card')
    // console.log($cards)
    for(var i = 0; i < $cards.length; i++) {
        if(!($($cards[i]).attr('id')=='to-add' || $($cards[i]).attr('id')=='to-save')){
            var $title = $($cards[i]).find('h3').html()
            var $imgurl=$($cards[i]).find('img').attr('src')
            var $url=$($cards[i]).find('a').attr('href')
            // console.log($title,$imgurl,$url)

            var $simdiv11='<div class="card" onclick=\"window.open(\'{$url}\')\">'
            +'<img src=\"{$imgurl}\">'
            +'<span>{$title}</span></div>'
            var $simdiv1=$simdiv11.replace('{$url}',$url)
            // .replace('{$imgurl}',$imgurl).replace('{$title}',$title)
            // +'<span>{$title}</span></div>'.replace({'{$url}',$url;'{$title}',$title,'{$imgurl}',$imgurl})
            var $simdiv2=$simdiv1.replace('{$imgurl}',$imgurl)
            var $simdiv=$simdiv2.replace('{$title}',$title)

            $('.simple-main').append($simdiv)
        }
    }
})


    $('.header-list').find('a').click(function () {
        $(this).addClass('active').siblings('a').removeClass('active')
    })
    $('.main-title').find('a').click(function () {
        $(this).addClass('active').siblings('a').removeClass('active')
    })
    $('.content-list').find('a').click(function () {
        $(this).addClass('active').siblings('a').removeClass('active')
    })

    //隐藏于显示相应的section
    $('.main-title').find('a').click(function () {
        var idx=$(this).index()
        $('section').eq(idx).show().siblings('section').hide()
    })

 

    $('.wherestarsdreamfrom .toggle>input').on('click',function () {
        var $name=$(this).parent().parent().children('div').children('h3').text()
        if($(this).prop('checked')){
            var $li = $('<li></li>');
            var $div=$(this).parent().parent().parent().clone(false)
            $li.append($div)
            $('.mypage-main .the-end').before($li)
            // $('.mypage-main').append($div)
            InsertMsg($name+'已添加到个人主页✔');
        }else{
            var $names=$('.mypage-main .card h3')
            // console.log($names.length);
            for (var i=0;i<$names.length;i++){
                // console.log($($names[i]));
                // console.log($(this).parent().parent().find('h3'));
                if($($names[i]).text()===$(this).parent().parent().find('h3').text()){
                    $($names[i]).parent().parent().parent().remove();
                }
            }
            RemoveMsg($name+'已从个人主页移除❌');
        }
    })

    $('section').on('click','.mypage-main .toggle input',function () {
        var $name1=$(this).parent().parent().children('div').children('h3').text()
        var $names2=$('.wherestarsdreamfrom .card h3')
        for (var i=0;i<$names2.length;i++){
            // console.log($($names[i]));
            // console.log($(this).parent().parent().find('h3'));
            if($($names2[i]).text()===$name1){
                $($names2[i]).parent().parent().find('input').prop('checked',false)
                $(this).parent().parent().parent().remove();
            }
        }
        RemoveMsg($name1+'已从个人主页移除❌');
    })


    //tip是提示信息，type:'success'是成功信息，'danger'是失败信息,'info'是普通信息,'warning'是警告信息
    function ShowTip(tip, type) {
        var $tip = $('#tip');
        if ($tip.length == 0) {
            // console.log($tip.length);
            // 设置样式，也可以定义在css文件中
            // rgb(0,220,0,0.5)绿色
            // transition:all 0.5s;
            // transform:translateY(100px);transition:all 1s;
            $tip = $('' +
                '<span id="tip" style="position:fixed;opacity:0.65;background-color:#e4ebf5;box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem  #FFFFFF;border-radius:10px;top:75px;left:50%;z-index:9999;height: 35px;padding: 0 20px;line-height: 35px;">' +
                '</span>');
            $('body').append($tip);
        }
        if(type=='insert'){
            $tip.stop(true).text(tip).css(
                { 'margin-left': - $tip.outerWidth() / 2,'color':'rgb(0,220,0,1)'}).fadeIn(200).delay(800).fadeOut(800);
        }else if(type=='remove'){
            $tip.stop(true).text(tip).css(
                {'margin-left': - $tip.outerWidth() / 2, 'color':'red'}).fadeIn(200).delay(1000).fadeOut(800);}//设置显示位置和显示时间和消失时间
    }
    function InsertMsg(msg) {
        ShowTip(msg, 'insert');
    }
    function RemoveMsg(msg) {
        ShowTip(msg, 'remove');
    }



    //左边导航栏的固定效果
    //计算第一部分的高度.
    var topHeight = $('.header').height();
    //计算第二部分的高度.
    var navHeight = $('.main-title').height();

    $(window).scroll(function () {
        //1.获取页面滚出去的距离(被卷曲出去的距离);
        var scrollTopValue =  $(window).scrollTop();
        //2.判断,看scrollTopValue的值是不是大于两部分的高度.
        if(scrollTopValue >= topHeight+navHeight){
            //让导航marginTop动态变化.
            $('.content-list').css({
                marginTop:(scrollTopValue-topHeight-navHeight-10)/1.3
            });
        }else {
            //让导航marginTop恢复0.
            $('.content-list').css({
                marginTop: 0
            });
        }
    });  //给页面设置一个滚动事件.




    //鼠标移动到去添加图片改变
    $('.mypage .go-to-add img').mouseenter(function () {
        $(this).attr('src','./images/other-icos/go.png')
    })

    $('.mypage .go-to-add img').mouseleave(function () {
        $(this).attr('src','./images/other-icos/add.png')
    })

    $('.mypage .go-to-add').mouseenter(function () {
        $(this).css('backgroundColor','#75cef9')
        // rgba(0,191,255,0.6)
    })

    $('.mypage .go-to-add').mouseleave(function () {
        $(this).css('backgroundColor','#e4ebf5')
    })

    // 点击去添加时导航栏变化
    $('.mypage .go-to-add a').click(function () {
        $('.wherestarsdreamfrom').show().siblings('section').hide()
        $('.main-title').find('a').eq(2).addClass('active').siblings('a').removeClass('active')
    })


    //鼠标移动到保存页面div的图标变化
    $('.mypage .mypage-main #to-save img').mouseenter(function(){
$(this).attr('src','./images/other-icos/save1.png')
    })
    $('.mypage .mypage-main #to-save img').mouseleave(function(){
        $(this).attr('src','./images/other-icos/save.png')
    })
    
    $('.mypage #to-save').mouseenter(function () {
        $(this).css('backgroundColor','#8abdff4a')
        // rgba(0,191,255,0.6)
    })

    $('.mypage #to-save').mouseleave(function () {
        $(this).css('backgroundColor','#e4ebf5')
    })


    // 设置主页div可拖动
    var el=document.getElementById('mypage-card')
    var sortable=Sortable.create(el,{})

//nodejs接口部分
// 加载网页就判断用户是否登录
$.get('/api/username', function (res) {
    // status 为 0 表示获取用户名称成功；否则表示获取用户名称失败！
    if (res.status !== 0) {
        $('.wherestarsdreamfrom .content-main #xuexitong .card-header input').trigger('click')
        $('.wherestarsdreamfrom .content-main #likou .card-header input').trigger('click')
        $('.wherestarsdreamfrom .content-main #bilibili .card-header input').trigger('click')
    //   alert('您尚未登录~')
    RemoveMsg(res.message)
    //   location.href = './login.html'
    } else {

        // 将数据库中的收藏信息提出处理并逐个点击
        // ,{async:true}
        
    //遍历数据库中存储的str并且用空格分隔成一个数组，遍历数组中元素点击网页按钮
    $.post('/api/getmywebsites',{'name':res.username},function(res){
        if(res.status===0){
            // console.log(res.webs)
            // InsertMsg(res.webs)
            var $webs=res.webs.split(' ')
            for(var i=0;i<$webs.length-1;i++){
                $('.wherestarsdreamfrom .content-main #{name} .card-header input'.replace('{name}',$webs[i])).trigger('click')
            }

        }else{
            // console.log(res.message)
            RemoveMsg(res.message)
        }
    })

    $.post('/api/getpreparetodo',{'name':res.username},function(res){
        if(res.status===0){
            var $things=res.things.split('{|||}')
            $no_do=$things[0].split('{|}')
            $did=$things[1].split('{|}')
            // console.log($no_do)
            // console.log($did)

            if($no_do.length>1){
                for(var i = 0;i<$no_do.length-1;i++){
                    // console.log($no_do[i])
                    var $task = $("<div class='task'></div>").text($no_do[i]);
                            var $del = $("<img class='delete' src=\"./images/other-icos/delete.png\">").click(function(){
                                var p = $(this).parent();
                                p.fadeOut(function(){
                                p.remove();
                                });
                          });
                
                          var $check = $("<img class='check' src=\"./images/other-icos/co.png\">").click(function(){
                                var p = $(this).parent();
                                p.fadeOut(function(){
                                    $smile=$('<img class=\'check\' src=\"./images/other-icos/smile.png\">').click(function(){
                                        InsertMsg('你真棒!!!')
                                    })
                                    p.append($smile)
                                $(".complete").append(p);
                                p.fadeIn();
                                });
                                $(this).remove();
                          });
                
                          $task.append($del,$check);
                          $(".notcomplete").append($task);
                }
            }

            if($did.length>1){
                for(var i = 0;i<$no_do.length-1;i++){
                    var $task = $("<div class='task'></div>").text($did[i]);
                            var $del = $("<img class='delete' src=\"./images/other-icos/delete.png\">").click(function(){
                                var p = $(this).parent();
                                p.fadeOut(function(){
                                p.remove();
                                });
                          });
                
                          var $check = $("<img class='check' src=\"./images/other-icos/smile.png\">").click(function(){
                                var p = $(this).parent();
                                p.fadeOut(function(){
                                    $smile=$('<img class=\'check\' src=\"./images/other-icos/smile.png\">').click(function(){
                                        InsertMsg('你真棒!!!')
                                    })
                                    p.append($smile)
                                $(".complete").append(p);
                                p.fadeIn();
                                });
                                $(this).remove();
                          });
                
                          $task.append($del,$check);
                          $(".complete").append($task);
                }
            }

        }else{
            // console.log(res.message)
            RemoveMsg(res.message)
        }
    })
    //   alert('欢迎您：' + res.username)
    InsertMsg('欢迎您~'+res.username)
    $('.header-login span').html(res.username)
    $('.header-login img').attr('src','./images/other-icos/login1.png')
    }
  })

//设置点击保存配置的图标时，发送页面数据到数据库并存储
$('#to-save > div > img').click(function(){
    var $ul=$(this).parent().parent().parent().parent()
    var $lis=$ul.children('li')
    var str=''
    for (var i=0;i<$lis.length;i++) {
        if(!($($lis[i]).children('div').attr('id')==='to-add' || $($lis[i]).children('div').attr('id')==='to-save')) {
            // console.log($($lis[i]).children('div').attr('id'))
            str=str+$($lis[i]).children('div').attr('id')+' '
            // console.log(str)
        }
    }
    //将str保存到数据库
    $.post('/api/mywebsites',{'str':str},function(res){
        if (res.status === 0) {
            InsertMsg(res.message)
            // alert(res.message)
            // window.location.href=('../../wheredreamstart.html')
            } else {
            alert(res.message)
            }
    })
})

// 点击保存将待办事项保存到数据库
$('.prepare .container .presave').click(function(){
    var $things_str=''
    var $no_com=$(this).parent().children('.notcomplete').children('.task')
    var $com=$(this).parent().children('.complete').children('.task')

    for(var i=0;i<$no_com.length;i++){
$things_str=$things_str+$($no_com[i]).text()+'{|}'
    }
    // 增加分隔符{|}{|||}
    $things_str+='{|||}'
    for(var i=0;i<$com.length;i++){
        $things_str=$things_str+$($com[i]).text()+'{|}'
    }

$.post('/api/preparetodo',{'things':$things_str},function(res){
    if (res.status === 0) {
        InsertMsg(res.message)
        } else {
        alert(res.message)
        }
})

    // console.log($things_str)
    // console.log($things_str.split('{|||}'))
    // console.log($things_str.split('{|||}').length)

    // console.log($things_str.split('{|||}')[0].split('{|}'))
    // console.log($things_str.split('{|||}')[1].split('{|}'))


    // console.log($no_com)
    // console.log($com)
})


})