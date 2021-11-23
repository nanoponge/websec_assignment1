const http = require("http"),
      fs = require("fs"),
      path = require("path"),
      url = require("url");
var root = path.resolve();
var sever = http.createServer(function(request,response){
    var filepath = path.join(root,"index.html");
    // 获取文件状态
    fs.stat(filepath,function(err,stats){
        if(err){
            // 发送404响应
            response.writeHead(404);
            response.end("404 Not Found.");
        }else{
            // 发送200响应
            response.writeHead(200);
            // response是一个writeStream对象，fs读取html后，可以用pipe方法直接写入
            fs.createReadStream(filepath).pipe(response);
        }
    });
});
sever.listen(80);
