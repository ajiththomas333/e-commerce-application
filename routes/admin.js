var express = require('express');
var router = express.Router();
var productHealper=require('../helper/product-helper')
var product=require('../config/schema')
/* GET users listing. */
router.get('/', function(req, res, next) {

productHealper.getAllproduct().then((products)=>{
  res.render('admin/view-products',{products,admin:true})

 
})
});



router.get('/add-product', function(req, res, ) {

  res.render('admin/add-product')

}) 
router.post('/add-product', (req, res)=> {

     const data={
    name:req.body.Name,
    Category:req.body.Category,
    price:req.body.price,
    description:req.body.Description,
    image:req.files.image
  }
 

  productHealper.addProduct([data],(id)=>{
    
    
    let image=req.files.image
    image.mv('./public/product-images/'+id+'.jpg',(err)=>{
      if(!err){
        res.render('admin/add-product')
      }else{
        console.log("err")
      }
    })
    
  })
})

module.exports = router;
