// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// 导入并配置cros
const cors= require('cors')

// 导入配置文件
const config = require('./config')

// TODO_01：请配置 Session 中间件
const session = require('express-session')
app.use(
  session({
    cookie:{maxAge:config.maxAge,secure:false},
    secret: config.secret,
    resave: false,//强制保存session 建议设置成false
    saveUninitialized: true,
    rolling:config.rolling //动态刷新页面cookie存放时间
  })
)

app.use(cors())

// 托管静态页面
app.use(express.static('./pages'))
// 解析 POST 提交过来的表单数据
app.use(express.urlencoded({ extended: false }))

// 全局错误级别中间件中，捕获验证失败的错误，并把验证失败的结果响应给客户端
// app.use(function (err, res, next) {
//   // 数据验证失败
//   if (err) return res.send({
//     status:1,message: '换个用户名注册试试吧。。。'
//   })
// })


// 登录的 API 接口
app.post('/api/login', (req, res) => {
  // 判断用户提交的登录信息是否正确

  if (req.body.username == '' || req.body.password == '') {
    return res.send({ status: 1, message: '信息不能为空' })
  }

  const db= require('./db/index')

    // ? 表示占位符
  const selsql = 'select password from up where username=?'
  // const selsql = 'select mywebsites from websites where uname=\'admin\''
  // const selsql = 'select mywebsites from websites where uname=?'
  // 使用数组的形式为占位符指定具体的值
  db.query(selsql,req.body.username, (err, results) => {
    if (err) return res={
      status:1,message: '出错了，刷新下再试试吧！'
    }
    console.log(results)
    // console.log(results.length)

    if (results.length>0){
      if(results[0].password===req.body.password){
        req.session.user = req.body // 用户的信息
        req.session.islogin = true // 用户的登录状态
      return res.send({
      status:0,
      message:'密码正确' })
      }else{
        return res.send({status:1,message:'密码错误'})
      }
    }else {
      return res.send({
      status:1,message: '没有查询到该用户,请先注册哟~'
    })}
  })
  // if (req.body.username !== 'admin' || req.body.password !== '0') {
  //   return res.send({ status: 1, msg: '登录失败' })
  // }
  // TODO_02：请将登录成功后的用户信息，保存到 Session 中
  // 注意：只有成功配置了 express-session 这个中间件之后，才能够通过 req 点出来 session 这个属性


  // res.send({ status: 0, msg: '登录成功' })
})

// 注册的 API 接口
app.post('/api/register', (req, res) => {
    // 判断用户提交的登录信息是否正确
    // 接收表单数据
  const userinfo = req.body
  // 判断数据是否合法
//  console.log(userinfo.username)
//  console.log(userinfo.password)
  // if (!userinfo.username || !userinfo.password) {
  //   return res.send({ status: 1, message: '用户名或密码不能为空！如果没有，刷新下重试' })
  // }
  // if ((userinfo.username.length>20) || (userinfo.password.length>20)) {
  //   return res.send({ status: 1, message: '用户名和密码不能超过20个字符!'
  //   +'\n用户名的长度为userinfo.username.length:'+userinfo.username.length+
  //   '\n密码的长度为:'+userinfo.password.length+
  //   '\n用户名的长度是否大于20(userinfo.username.length>20):'+(userinfo.username.length>20)+
  //   '\n密码的长度是否大于20(userinfo.password.length>20):'+(userinfo.password.length>20)+
  //   '\n(userinfo.username.length>20 || userinfo.password>20):'+(userinfo.username.length>20 || userinfo.password.length>20)})
  // }

  if (userinfo.username.length>20) {
    return res.send({ status: 1, message: '用户名和密码不能超过20个字符！你的用户名长度是:'+userinfo.username.length})
  }

  if (userinfo.password.length>20) {
    return res.send({ status: 1, message: '用户名和密码不能超过20个字符！你的密码长度是:'+userinfo.password.length})
  }
  const db = require('./db/index')
  const sql = `select * from up where username=?`
  db.query(sql, [userinfo.username], function (err, results) {
    // 执行 SQL 语句失败
    if (err) {
      return res.send({ status: 1, message: err.message })
    }
    // 用户名被占用
//    console.log(results)
//    console.log(results==false)
//    console.log(results.length>1)
    if (results.length>0) {
      return res.send({ status: 1, message: '用户名被占用，请更换其他用户名！' })
    }else{

    // ? 表示占位符

    const ins_up_sql = 'insert into up values(?, ?)'
    const ins_web_sql = 'insert into websites values(?, ?)'
    const ins_thing_sql = 'insert into todolist values(?, ?)'

    // 使用数组的形式为占位符指定具体的值
    db.query(ins_web_sql, [userinfo.username, ''], (err) => {
      if (err){ return res.send({ status: 1, message: err.message})}else{
        db.query(ins_thing_sql, [userinfo.username, '{|||}'], (err) => {
          if (err) {return res.send({ status: 1, message: '注册失败，网络拥堵~'})}else{
            db.query(ins_up_sql, [userinfo.username, userinfo.password], (err, results) => {
              if (err) return res.send({ status: 1, message: '注册失败，网络拥堵~'})
              if (results.affectedRows === 1) return res.send({ status: 0, message: '注册成功'})
              })
              // TODO: 用户名可用，继续后续流程...
          }
          })
      }
      })
   
    }
  })
})

// 保存页面配置
app.post('/api/mywebsites', (req, res) => {
  // console.log(req.body.str)
if(req.session.islogin==true) {
  const db = require('./db/index')
  // const upd_web_sql = 'insert into websites values(?, ?)'
  const upd_web_sql ='update websites set mywebsites=? where uname=?'
  // 使用数组的形式为占位符指定具体的值
  db.query(upd_web_sql, [req.body.str,req.session.user.username], (err) => {
    if (err){ return res.send({ status: 1, message: '保存失败'})}
    else { return res.send({
    status: 0,
    message: 'success'
    })}
  })
}else{
  return res.send({ status: 1, message: '你尚未登录！'})
}

})

// 返回登陆用户的收藏的网站
app.post('/api/getmywebsites',(req,res)=>{
  // console.log(req.body.name)

  var name=req.body.name
  // console.log(name)

  const db= require('./db/index')

    // ? 表示占位符
  const selsql = 'select mywebsites from websites where uname=?'
  // const selsql = 'select mywebsites from websites where uname=\'admin\''
  // const selsql = 'select mywebsites from websites where uname=?'
  // 使用数组的形式为占位符指定具体的值
  db.query(selsql,name, (err, results) => {
    if (err) return res={
      status:1,message: '出错了，刷新下试试吧！'
    } 
    if (results){
      return res.send({
      status:0,
      webs:results[0].mywebsites })}
    else {
      return res.send({
      status:1,message: '没有查询到该用户'
    }
    )}
  })


})

app.post('/api/getpreparetodo', function(req, res){
  var name=req.body.name
  // console.log(name)
  const db= require('./db/index')
    // ? 表示占位符
  const selsql = 'select things from todolist where uname=?'
  // 使用数组的形式为占位符指定具体的值
  db.query(selsql,name, (err, results) => {
    if (err) return res={
      status:1,message: '出错了，刷新下试试吧！'
    } 
    // console.log(results)
    if (results){
      return res.send({
      status:0,
      things:results[0].things })}
    else {
      return res.send({
      status:1,message: '没有查询到该用户'
    }
    )}
  })

})

// 获取用户姓名的接口
app.get('/api/username', (req, res) => {
  // TODO_03：请从 Session 中获取用户的名称，响应给客户端
  if (!req.session.islogin) {
    return res.send({ status: 1, msg: '你尚未登陆~' })
  }
  res.send({
    status: 0,
    msg: 'success',
    username: req.session.user.username,
  })
})

// 退出登录的接口
app.post('/api/logout', (req, res) => {
  // TODO_04：清空 Session 信息
  req.session.destroy()
  res.send({
    status: 0,
    msg: '退出登录成功',
  })
})

app.post('/api/preparetodo', (req, res) => {
  if(req.session.islogin==true) {
    const db = require('./db/index')
    // const upd_web_sql = 'insert into todolist values(?, ?)'
    const upd_web_sql ='update todolist set things=? where uname=?'
    // 使用数组的形式为占位符指定具体的值
    db.query(upd_web_sql, [req.body.things,req.session.user.username], (err) => {
      // console.log(req.body.things+'    '+req.session.user.username)
      if (err){ return res.send({ status: 1, message: '保存失败,重试即可'})}
      else { return res.send({
        status: 0,
        message: '保存成功'
      })}
    })
  }else{
    return res.send({ status: 1, message: '请先登录！'})
  }

})


app.use((req,res)=>
	{res.send({status:1,message:'换个用户名注册试试吧。。'})
		}
	)

// 向数据库插入收藏网页的接口
// app.post('/api/mywebsites', (req, res) => {
//     // TODO_04：清空 Session 信息
//     res.send({
//       status: 0,
//       msg: '退出登录成功',
//     })
//   })

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80, function () {
  console.log('Express server running at http://127.0.0.1:80')
})