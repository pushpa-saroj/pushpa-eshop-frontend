import {useState} from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {

  const navigate=useNavigate();
const[email,setEmail]=useState("")
const[password,setPassword]=useState("");


const handleSubmit =(e: { preventDefault: () => void; })=>{
  e.preventDefault();
  localStorage.setItem("email",JSON.stringify(email))
  localStorage.setItem("password",JSON.stringify(password))
  console.log("save in local storage")
  navigate("/LogOut");
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
        <input type="text" 
         placeholder='Email'
         value={email}
         onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
        <input type="text" 
         placeholder='Email'
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
         />
        </div>
        <div>
        <button type="submit"> click</button>
        </div>
      </form>
        
    </div>
  )
}

export default SignIn;