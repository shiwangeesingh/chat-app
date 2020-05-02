const {mongoose,conn} = require('./dbConnection')

var chatSchema = mongoose.Schema({

    senderId: {     
        type: mongoose.Schema.Types.ObjectId,
                ref: 'user',
                default : null
        },
recieverId: {     
    type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
            default : null
    },
senderName:{
    type:String,
    require:true,
    default:""
},
receiverName:{
    type:String,
    require:true,
    default:""
},
message:{
    type:String,
    require:true,
    default:""  
},
},{
    strict:true,
    versionKey: false,
    timestamps: true,
    colletion:'chat'
})
exports.chatModel = conn.model('chat',chatSchema)