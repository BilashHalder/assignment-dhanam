const express=require('express');
const bodyParser=require('body-parser');
const router=express.Router();
const User=require('../model/user')
const path=require('path');
const urlparser=bodyParser.urlencoded({ extended: false });

router.get('/',async(req,res)=>{
try{

    const users=await User.find();
    res.json(users);

}
catch(err){
res.send("Error Happend "+err);
}
});


router.post('/signup',urlparser,async(req,res)=>{
    console.log("sign-up");
    const user=new User({
        name:req.body.full_name,
        email:req.body.email

    });
    
    try{
    
        const temp=await user.save();
        res.render('test',{
            username:req.body.full_name
        })
    
    }
    catch(err){
    res.send("Error Happend "+err);
    }
    });

 


module.exports=router;