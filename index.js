var express = require('express');
var router = express.Router();
var db=require('../db')

//////////////////////////
router.get('/', function(req, res, next) {
  const values=["binshul","binshulvilla","trader"]
   
  const user={name:'binshul',address:'villa',gender:'male'}

  const five=[{ name:'binshul',address:'villa',gender:'male'},
             {name:'rahul',address:'rahul villa',gender:'male'},
             {name:'rahul2',address:'2rahul villa',gender:'male'},
             {name:'rahul3',address:'3rahul villa',gender:'male'},
             {name:'rahul4',address:'4rahul villa',gender:'male'}]

  const welcome={name:"binshul",admin:false}

  res.render('index',{values,user,five,welcome});  
});

//////////////////////////



router.get('/userlogin', function(req, res, next) {
  res.render('userlogin');
});

router.post('/action',function(req,res)
{
  var productcategory=req.body.productcategory
  var productname=req.body.productname
  var productamount=req.body.productamount
  var productdetails=req.body.productdetails
  var sql=`insert into userlogin(productcategory,productname,	productamount,productdetails) values("${productcategory}","${productname}","${	productamount}","${productdetails}")`;
db.query(sql,function(err,result){
  if(err) throw err;
  res.redirect('/userlogin');
})

})
router.get('/userview', function(req, res, next) {
  var sql='select * from userlogin';
  db.query(sql,function(err,rows,fields){
    if (err) throw err;
  res.render('userview',{data:rows});
});
});
/////////////////////////////

router.get('/productnew',function(req,res,next){
  res.render('productnew');
});


router.post('/product',function(req,res)
{
  var fullname=req.body.fullname
  var address=req.body.address
  var pin=req.body.pin
  var gender=req.body.gender
  var district=req.body.district
  var contact=req.body.contact
  var email=req.body.email
  var sql=`insert into product(fullname,address,	pin,gender,district,contact,email) values("${fullname}","${address}","${	pin}","${gender}","${district}","${contact}","${email}")`;
db.query(sql,function(err,result){
  if(err) throw err;
  res.redirect('/productnew');
})

})

router.get('/productuserview',function(req,res,next){
  var sql='select * from product';
  db.query(sql,function(err,rows,fields){
    if(err) throw err;
  res.render('productuserview',{data:rows})
});
});

module.exports = router;
