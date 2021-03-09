var express = require('express');
var router = express.Router();
var sql = require('../db/db');
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded(
    {
        extended: false
      }
));
router.use(bodyParser.json());

router.post('/sign-up',(req,res)=>{
   
    var today = new Date();
    var users={
        "name":req.body.name,
        "email":req.body.email,
        "password":req.body.password,
    }

    sql.query('INSERT INTO vayuz_signup SET ?',users, function (error, results, fields) {
      if (error) {
        console.log(error)
        res.json({
            status:false,
            message:'there are some error with query',
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'user registered sucessfully'
        })
      }
    });

})

module.exports = router;