var express=require('express');
var path=require('path');
var app=express();
var bodyparser=require('body-parser');

app.use(bodyparser());
app.get('/',function(req,res){

    res.sendFile('regiform.html',{ root:path.join(__dirname,'./htmlpage')});
    app.post('/registration',function(req,res){
        res.end('name:'+req.body.name +'\naddress:'+req.body.address +'\ngender:'+req.body.gender +'\ndate'+req.body.date +'\ncontact:'+req.body.contact +'\nemail'+req.body.email +'\npassword'+req.body.password);
    });
});
app.listen(5000);