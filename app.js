var express = require('express')
var app = express();
app.use(express.static('./public'))
app.listen(3000,function(){
    console.log('运行在服务端')
})