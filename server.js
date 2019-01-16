var http = require('http'); 
var url = require('url'); 
var static = require('node-static'); 
var file = new static.Server('.');


var accept = function(req, res){
    file.serve(req,res, function (err, res){
      if (err){
        console.error("Error serving " + req.url + " - " + err.message);
      }   
    });     
};


if(!module.parent){
    console.log('module as application');
    http.createServer(accept).listen(8080);
} else {
    console.log('module as module');
    exports.accept = accept;
}
console.log('Server running on port 8080');