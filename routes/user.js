var express = require('express');
var router = express.Router();
var productHealper=require('../helper/product-helper')

/* GET home page. */
router.get('/', function(req, res, next) {

  productHealper.getAllproduct().then((products)=>{
    res.render('user/view-product',{products,admin:false})
  
   
  })

});

module.exports = router;
