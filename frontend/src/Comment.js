import {useState, useEffect} from "react"
import Axios from "axios"

export default function Comment(){

     const [formData, setFormData] = useState({
            comment:"",
            sender:""
     })

    //  state variable to store my incoming comments
    const [dbComments, setDbcomments] = useState([])

    useEffect(()=>{
          fetch('http://localhost:8000/get-comments').then((res)=>{
               return res.json()
          }).then((data)=>{
               setDbcomments(data)
          })
    }, [dbComments])
     
    function handleChange(event){
            //  console.log(event.target.value)
            setFormData((currentFormData)=>{
                  return{
                      ...currentFormData,
                    [event.target.name]:event.target.value
                      
                       
                  }
            })
    }

    function handleSubmit(event){
         event.preventDefault()
         
           Axios.post('http://localhost:8000/post-comment', {
               comment:formData.comment,
               sender:formData.sender
           })
                
            
         

    }
    return(
       <div className="container">
             
               <form onSubmit={handleSubmit}>
                <h1>Pls drop a comment for us</h1>
                     <textarea placeholder="comment here" name="comment" onChange ={handleChange} value={formData.comment}/>

                     <input type="text" placeholder="your name" name="sender" onChange={handleChange} value={formData.sender}/>

                     <button  type = "submit">Send</button>
               </form>

               <section className="comment-section">
                     
                     {
                       dbComments.map((dbcomment)=>{
                            return <div className="comment-box" key={dbcomment._id}>
                                  <p>{dbcomment.comment}</p>
                                  <h4>{dbcomment.sender}</h4>
                            </div>
                       }) 
                     }

               </section>
         </div>
    )
}