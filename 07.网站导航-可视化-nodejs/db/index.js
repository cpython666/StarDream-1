const config = require('../config')

const mysql=require('mysql')

const db=mysql.createPool({
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.password,
    database:config.database,
})

module.exports =db