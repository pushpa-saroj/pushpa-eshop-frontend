import { useNavigate } from "react-router-dom";


function SignUp(){
    const navigate=useNavigate()
  const handleClick=()=>{
    navigate("/SignIn")
  }
    return(
    <>
    <input type="text" placeholder="Full Name"/>
    <input type="text" placeholder=" Email"/>
    <input type="password" placeholder=" Password"/>
    <button onClick={handleClick}>
        Sign Up
    </button>
    </>)
}
export default SignUp;