//jshint esversion:6

const express = require("express");

const app = express();

// body-parser is used to post the information 
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true})); // bodyParser.urlencoded is used to post the data extracted from html
// by setting extended:True , bodyParser allows us to post nested objects and it must be written every single time we use 
// body-parser
// need of body-pareser: It allows us to go into any of the route


// // getting or extracting data from html file
// app.get("/",function(req,res){
//     // res.send("Hello Taru");   //res.send is used to send some shorter infomation from js file 
//     res.sendFile(__dirname+"/index.html");    //res.sendFile is used to some html file to the response page
// });

// // processing the data with post method functions
// app.post("/",function(req,res){
//     // res.send("Thanks for posting!!")
//     var n1 = Number(req.body.num1);        //req.body.num1 returns string value
//     var n2 = Number(req.body.num2);
//     var sum = n1+n2;
//     res.send("Sum is: "+sum);
// })


//bmi calculator
app.get("/",function(req,res){
    res.sendFile(__dirname+ "/bmiCalculator.html");
});

app.post("/",function(req,res){
    var wt = Number(req.body.weight);
    var h = Number(req.body.height);
    var ht = h/100;
    bmiVal = wt/(ht*ht);
    if (bmiVal>25){
        res.send(bmiVal+" You are overweighted!!");        
    }
    else if(bmiVal<18.5){
        res.send(bmiVal+" You are underweight:-(");
    }
    else{
        res.send(bmiVal+" Nice, You are normal; take care more of yourself");
    }
})

app.listen(3000,function(){
    console.log("Server has started at port 3000");
});
