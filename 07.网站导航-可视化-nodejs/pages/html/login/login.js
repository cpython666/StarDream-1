$(function() {
    $('#b-form #login-in').on('click', function(e){
        e.preventDefault()
              // 发起 POST 登录请求
        $.post('/api/login', $(this).parent().serialize(), function (res) {
            // status 为 0 表示登录成功；否则表示登录失败！
            if (res.status === 0) {
            //   location.href = './index.html'
            // alert('登陆成功！')
            window.location.href=('../../wheredreamstart.html')
            } else {
              alert(res.message)
            }
          })
        })

    $('#a-form #login-up').on('click', function(e){
        e.preventDefault()
        $.post('../../api/register',$(this).parent().serialize(),function(res){
            // console.log('1')
        if (res.status === 0) {
                    alert('注册成功！去登陆吧')
                    // window.location.href=('../../wheredreamstart.html')
                    } else {
                    alert(res.message)
                    }
        })
    })


$('.to-return').click(function(){
    location.href='../../wheredreamstart.html'
})

})