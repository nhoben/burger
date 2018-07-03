var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req,res){
    burger.all(function(burger_data){
        console.log('burger data routes', burger_data);
        let hbsObj = {
          burger_data: burger_data
        }
        res.render('index', hbsObj);
 })

})

router.put('/burgers/update', function(req,res{
    burger.update(req.body.burger_id, function(result){
        console.log(result);
        res.redirect('/');
    });
});

module.exports = router;