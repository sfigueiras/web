var og = require('open-graph');
 
var url = "http://localhost:8080";
 
og(url, function(err, meta){
    console.log(meta);
})