const mongoose = require('mongoose')

const wishlistSchema = new mongoose.Schema({
    id:{
        type:Number,
        reuired:true
      
    },
    
title:{
    type:String,
    required:true

},
price:{
    type:Number,
        reuired:true

},
description:{
    type:String,
    required:true
},

category:{
    type:String,
    required:true
},

image:{
    type:String,
    required:true
},
rating:{
    type:Object,
    required:true
},
userId:{
    type:String,
    required:true
}
})

const wishlists = mongoose.model("wishlists",wishlistSchema)
module.exports = wishlists
