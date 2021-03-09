var express = require('express');
var app = express();
var cors = require('cors')


let sign = require('./signup/signup')

app.use(cors())
app.use('/api/auth',sign);

app.get('/',(req,res)=>{
    res.send("app running");
})


app.listen(3000,(err)=>{
    if(!err){
        console.log("app running on port 3000")
    }
})