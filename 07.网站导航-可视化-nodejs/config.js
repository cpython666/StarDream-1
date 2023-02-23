const config={
// session用到的
    maxAge: 1000*60 * 60 * 24 *7,
    secret:'stardream',
    rolling:true, //动态刷新页面cookie存放时间

// 数据库用到的
    // host:'124.220.34.43',
    // 数据库账号密码
host:'127.0.0.1',
    // user:'qihang',
    // password:'x4A4MnRbAKfmizJ2',
    // password:'W1.+',
    user:'root',
    password:'1234',
database:'db01',
    port:'3306',
    // 数据库名
    // database:'wheredreamstart'
    // 注册用户连接数据库的表

}

module.exports =config