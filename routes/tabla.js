var express = require('express');
var router = express.Router();
var db = require('../conexion/conexion');

/* GET home page. */
router.get('/', function(req, res, next) {

    db.query("SELECT * FROM tblproductos ", function(err,resultado){
        console.log(resultado)
        res.render('tabla', {title: 'tabla',  items:resultado });
    });
    
    

  });
  

module.exports = router;