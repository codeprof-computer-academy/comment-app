
import "./app.css"
import {BrowserRouter, Routes, Route, Link, useLocation, Outlet} from "react-router-dom"
import Welcome from "./Welcome"
import Comment from "./Comment"
import About from "./About"
import Services from "./Service"
import Training from "./Training"
import Register from "./Register"
import Username from "./Username"


export default function App(){
     
    
    return(
      <BrowserRouter>
         <nav>
               <Link to="/welcome">Home</Link>||
               <Link to="/aboutus">About us</Link>||
               <Link to="/services">Services</Link>||
               <Link to="/postcommnent">Send us Comment</Link>
               <Link to="/services/training">Training</Link>
               <Link to="/register"><button>Register</button></Link>
               <Link to="/welcome/username"></Link>

         </nav>
          <Routes>
              <Route path="/welcome" element={<Welcome/>}>

                 <Route path = ":username" element={<Username/>} />

              </Route>

                <Route path="register" element={<Register/>}/>

              <Route path="/postcommnent" element={<Comment/>}/>

              <Route path="/aboutus" element={<About/>}/>

              <Route path="/services" element={<Services/>}>
                  <Route path="training" element={<Training/>}/>
                  
              </Route>
             
          </Routes>
  
      </BrowserRouter>
    )
}