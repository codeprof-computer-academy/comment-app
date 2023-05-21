const express = module.require('express')
const cors = module.require('cors')
const mongoose = module.require('mongoose')
const Comment = module.require('./commentSchema')

const app = express()

// middlewares
app.use(express.json())
app.use(cors())

// connect to database
mongoose.connect('mongodb+srv://thompsonadeshina:GodBlessCodeprof@students-db.4uakoau.mongodb.net/').then(()=>{
    console.log("connection to database was successful!")
}).catch((err)=>{
      console.log("Ooops! error occured due to " + err)
})



// post route
app.post('/post-comment', async(req, res)=>{
       
    let newComment = new Comment({
           comment: req.body.comment,
           sender: req.body.sender
    })

    try{
               await newComment.save()
                res.send("comment successfully posted to database")
                  
    }catch(err){
           res.send("Ooops! error occured due " + err)
    }
})


// get all comment route

app.get('/get-comments', async(req, res)=>{

         let comments = []
         try{
              comments = await Comment.find()
              res.send(comments)

         }catch(err){
              console.log("Ooops! error occured due to " + err)
         }
})



const PORT = process.env.PORT || 8000
app.listen(PORT, ()=>{console.log("app is running on port " + PORT)})