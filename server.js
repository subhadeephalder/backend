const express=require('express');
const app=express();
const bodyparser=require('body-parser');
const port=8080;
const sequelize= require('./database');
const users=require('./models/users');
users.sync();
app.set('view engine','ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.get('/register',(req,res)=>{
    res.render('register');
})
app.get('/login',(req,res)=>{
    res.render('login');
})
app.post('/register',(req,res)=>{
    users.findAll({where:{email:req.body.email}}).then(user=>{
        if(user.length===0){
            users.create({
                email:req.body.email,
                password:req.body.password,
                name:req.body.name,
                address:req.body.address,
                contact:req.body.contact
            })
        
            res.redirect('/login');
        }
        else{
            res.send('<h1>Email already in use</h1>');
        }
    })
    .catch(err=>console.log(err));
})
app.post('/login',(req,res,next)=>{
     users.findAll({where:{email:req.body.email,password:req.body.password}}).then(user=>{
         if(user.length===0){res.send("Incorrect username or password");}
         else{res.redirect('/posts'+user[0].dataValues.id);}
     })
     .catch(err=>console.log(err));
})
app.get('/posts*',(req,res,next)=>{
    users.findAll({where:{id:req.url.substring(6,req.url.length)}}).then(user=>{
        res.send('Hi '+user[0].dataValues.name);
    })
    .catch(err=>console.log(err));
    
})

app.listen(port);

