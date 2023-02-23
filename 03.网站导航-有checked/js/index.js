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

    var $inputs=$('.toggle>input')

    // for(var i = 0 ; i < $inputs.length; i++){
        // $($inputs[i]).prop('checked','false')
        console.log($($inputs[3]).attr('checked','false'))
    // }

    // console.log($inputs);

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
                marginTop:scrollTopValue-topHeight-navHeight
            });
        }else {
            //让导航marginTop恢复0.
            $('.content-list').css({
                marginTop: 0
            });
        }
    });  //给页面设置一个滚动事件.

})