$(function () {
    $('.search img').click(function () {
        $('.mask').show();
        $('.engines').show();
        $('.triangle img').css({'transform':'rotateZ(180deg)'})
    })

    $('.mask').click(function () {
        $('.mask').hide();
        $('.engines').hide();
        $('.triangle img').css({'transform':'rotateZ(0)'})
    })

    $('.engines').click(function(){
        $('.mask').hide()
        $('.engines').hide()
        $('.triangle img').css({'transform':'rotateZ(0)'})
    })

    $('.set').click(function () {
        $id=$(this).attr('id')
        $src=$(this).children('img').attr('src')
        $('.search').children('img').attr('class',$id)
        $('.search>img').attr('src',$src)
    })

    $('.main-div .search .to-search').click(function () {
        if(!($('.main-div .search input').val()==='')){
            // console.log($(this).parent().children('img').attr('class'))
            window.open($(this).parent().children('img').attr('class')+$('.main-div .search input').val());
        }
    })

    $('.main-div .search input').on('keyup',function(event){
        if(event.keyCode=='13'){            
            $(this).parent().children('.to-search').trigger('click')
        }
    })

    // $('.scene').hide()
})