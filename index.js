const express = require('express')

const app = express()

const PORT = 7000

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,UPDATE,DELETE,OPTIONS,PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next()
})

app.use('/',(req,res)=>{
  res.status(200).send('This is the home page')
})
//app listen to the port for localhost server
app.listen(PORT,()=>console.log(`server and database has been connected to port:${PORT}`))
