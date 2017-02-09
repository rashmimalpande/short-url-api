var express = require('express');
var app = express();
var code = Math.ceil(Math.random()*10000);
var originalUrl;

app.use('/new', function(req,res){
    var url = req.path;
    originalUrl = url.toString().slice(url.indexOf('/')+1);
    
    res.json({'original' : originalUrl, 'short-url': req.hostname + '/' + code});
});

app.get('/:code', function(req, res){
    if(req.params.code == code.toString()){
        res.redirect(originalUrl);
    }
});
app.listen(process.env.PORT || 8080);