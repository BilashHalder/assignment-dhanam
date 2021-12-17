const express=require('express');
const bodyParser=require('body-parser');
const mongourl='mongodb://localhost/test';
const mongoose=require('mongoose');
const path=require('path');
const mongo=mongoose.connection;
const server=express();



mongoose.connect(mongourl,{useNewUrlParser:true});
const userRouter=require('./router/user');
server.set('views',path.join(__dirname,'view'));
server.set('view engine','pug');
server.use(express.json())
server.use('/user',userRouter);

server.get('/',(req,res)=>{
//res.sendFile(path.join(__dirname,'index.html'));
res.render('index');
});

server.get('/test',(req,res)=>{
    res.render('test',{
        title:'Bilash Halder'
    })
    });
server.listen(9000,()=>{
    console.log("server Started");
})