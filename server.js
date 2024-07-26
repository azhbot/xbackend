const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const app=express();
const PORT=3000;

app.use(bodyParser.json());
app.use(cors());

const users=[];

app.get('/',(req,res)=>{
    res.send('this is the backend')
})

//handle registration.....
app.post('/signup',(req,res)=>{
    const {username,email,password}=req.body;

    //basic verification
   const validUser=users.find((user)=>user.username===username);

   if(validUser){
    return res.status(400).json({message:'user is already exist'})
   }

   users.push({username,email,password});
   res.status(200).json({message:'create account successfully'})
})


app.get('/profile',(req,res)=>{
   if(users){
    res.status(200).json(users)
   }
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})

