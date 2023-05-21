const mongoose = module.require("mongoose");

const commentSchema = mongoose.Schema({
      comment:{
          type:String,
          minLength:10,
          required:true
      },
      sender:{
           type:String,
           required:true
      },
      date:{
        type:Date,
        default: Date.now()
      }
})

module.exports = mongoose.model("comments",commentSchema )