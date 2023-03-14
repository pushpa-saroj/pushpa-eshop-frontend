import { FiLogOut } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'


function LogOut() {
const navigate=useNavigate();

const handleClick=()=>{
  navigate("/SignIn")
}

  return (
    <div> 
      <div >
      <figure><FiLogOut onClick={handleClick}  style={{width:"100px" ,height:"100px"}}/></figure>
      </div>
     
    </div>
  )
}

export default LogOut