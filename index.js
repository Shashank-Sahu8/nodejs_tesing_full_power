const express=require('express')
require('dotenv').config()
const app=express()
const port=3000

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.get('/sahu',(req,res)=>{
    res.send("shashank sahu?")
})


app.post('/login',(req,resp)=>{
    res.send(`${req} done`)
})
app.listen(process.env.PORT,()=>{
    console.log(`server running on port ${port}`)
})