import { Outlet } from "react-router-dom";

export default function Welcome(){
    return(
        <div>
         
            <h1>This is welcome page</h1>
            <Outlet/>
        
           
         
            
        </div>
    )
}