$(function () {


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
            var $div=$(this).parent().parent().parent().clone(false)
            $('.mypage-main .the-end').before($div)
            // $('.mypage-main').append($div)
            InsertMsg($name+'已添加到个人主页✔');
        }else{
            var $names=$('.mypage-main>.card h3')
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
            $tip = $('' +
                '<span id="tip" style="position:fixed;background-color:#e4ebf5;box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem  #FFFFFF;border-radius:10px;top:75px;left: 50%;z-index:9999;height: 35px;padding: 0 20px;line-height: 35px;">' +
                '</span>');
            $('body').append($tip);
        }
        if(type=='insert'){
            $tip.stop(true).text(tip).css(
                {'margin-left': - $tip.outerWidth() / 2, 'color':'rgb(0,220,0,1)'}).fadeIn(200).delay(800).fadeOut(800);
        }else if(type=='remove'){
            $tip.stop(true).text(tip).css(
                {'margin-left': - $tip.outerWidth() / 2, 'color':'red'}).fadeIn(200).delay(800).fadeOut(800);}//设置显示位置和显示时间和消失时间
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
                marginTop:scrollTopValue-topHeight-navHeight-10
            });
        }else {
            //让导航marginTop恢复0.
            $('.content-list').css({
                marginTop: 0
            });
        }
    });  //给页面设置一个滚动事件.

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

    $('.wherestarsdreamfrom .content-main .card-header input').eq(24).trigger('click')
    $('.wherestarsdreamfrom .content-main .card-header input').eq(32).trigger('click')
    // $('.wherestarsdreamfrom .content-main .card-header input').eq(0).trigger('click')
    // $('.wherestarsdreamfrom .content-main .card-header input').eq(0).trigger('click')
    // $('.wherestarsdreamfrom .content-main .card-header input').eq(0).trigger('click')

    // for (var i=0;i<$('.wherestarsdreamfrom card').length;i++){
    //
    //     if($('.wherestarsdreamfrom .content-main .card-header input'))
    //     $('.wherestarsdreamfrom .content-main .card-header input').eq(0).trigger('click')
    // }

})