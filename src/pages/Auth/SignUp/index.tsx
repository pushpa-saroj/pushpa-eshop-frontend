import { useNavigate } from "react-router-dom";


function SignUp(){
    const navigate=useNavigate()
  const handleClick=()=>{
    navigate("/SignIn")
  }
    return(
    <>
    <input type="text" placeholder=" FullName"/>
    <input type="text" placeholder=" FullName"/>
    <input type="text" placeholder=" FullName"/>
    <button onClick={handleClick}>
        Sign Up
    </button>
    </>)
}
export default SignUp;