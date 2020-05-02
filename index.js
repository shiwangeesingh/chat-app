const path = require('path');
const express = require('express');
const app = express();
const { UserModel } = require("./userDb")
var bodyParser = require ('body-parser');
const { chatModel } = require("./chatDb")
var cors = require('cors');
app.use(cors());
let server = app.listen((3000));
let socket = require('socket.io');
const io =  socket(server)
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'.','dist','my-chat-app')));
var allUsers = []

//************************************* SOCKET CONNECTION ************************** */
io.on('connection', socket => {
  var handshakeData = socket.request;
  let userId = handshakeData._query['userId']
  let index = allUsers.findIndex((use)=> use.userId == userId )
  if(index == -1) {
    allUsers.push({
      socketId: socket.id,
      userId: userId
    })
  }
   else 
    allUsers[index].socketId =  socket.id
    socket.on('disconnect',async function(message) {
      console.log("Disconnect message ", message)
        let Removeindex = allUsers.findIndex( (user) => user.socketId ==  socket.id )
        if(Removeindex >-1) {
            console.log("discoonect id ", allUsers[Removeindex].userId)
            allUsers.splice(Removeindex,1)
            console.log("User are Still left", allUsers)
        }
   });  
   socket.on('sendMessageFromSender',(data)=>{
        tosent =  allUsers.find((user) => user.userId ==  data.recieverId )
        if(tosent)
        io.to(tosent.socketId).emit('sendMessageToReciever', data);
   })

});



//************************************* Login ************************** */

app.post('/login', async(req,res)=>{
  const data = await UserModel.findOne({name:req.body.name, password: req.body.password})
  console.log(data,req.body.name,req.body.password)
  if(data)
  res.status(200).json({data});
  else
  res.status(403).json({data});
})
//************************************* signup ************************** */

app.post('/signup', async(req,res)=>{
  const data = await UserModel.create({name:req.body.name, password: req.body.password})
  console.log(data,req.body.name,req.body.password)
})

//************************************* get userlist ************************** */

app.post('/getAllUser', async(req,res)=>{
  try{
  const data = await UserModel.find({$nor:[{_id:req.body.userId}]})
  console.log(data,req.body.userId)
  //if(data)
  res.status(200).json({data});
  }
  catch(err){
    console.log(err)
  }
})

//************************************* CHAT LIST ************************** */

app.post("/getChat", async(req,res)=>{
  console.log(req.body)
  const chatList = await chatModel.find({$or:[ {$and:[{recieverId:req.body.recieverId}, {senderId:req.body.senderId}]},
                                        {$and:[{recieverId:req.body.senderId}, {senderId:req.body.recieverId}]}]})
  console.log("chatList",chatList)
  return res.json({chat:chatList})
  })
  app.post("/sendMessage", async(req,res)=>{
  const chatList = await chatModel.create({recieverId:req.body.recieverId, senderId:req.body.senderId ,senderName:req.body.senderName, receiverName : req.body.receiverName,message:req.body.message})
  return res.json({chat:chatList})
  })