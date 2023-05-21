import {useParams} from "react-router-dom"
export default function Username(){
    const {username} = useParams()
    return(
        <div>
            <h1>The username is {username}</h1>
           
        </div>
    )
}