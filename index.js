const express=require('express')
const body_parser=require('body-parser')
const studentrouter=require('./routes/student')
const app=express()

app.use(body_parser.json())

app.use(studentrouter)

app.listen(6000,()=>{
    console.log("sever is runs on 6000");
})