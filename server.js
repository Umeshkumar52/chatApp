import express from 'express'
import cors from 'cors'
import {Server} from 'socket.io'
import { createServer } from 'node:http'
import http from 'http'
import { fileURLToPath } from 'node:url'
import { dirname,join } from 'node:path'
import { Socket } from 'node:dgram'
const app=express()
const server=createServer(app,{cors:{
    origin:"http://localhost:3001",
    credentials:true,
     }})
const io=new Server(server)
const __dirname=dirname(fileURLToPath(import.meta.url))
app.get('/',(req,res)=>{
 res.sendFile(join(__dirname,'index.html'))
})
io.on("connection",(socket)=>{
    socket.on("message",(msg)=>{
      
        socket.broadcast.emit("message",msg)
    })
})
server.listen(3001,()=>{
    console.log("Server is listening on port 3001");
})