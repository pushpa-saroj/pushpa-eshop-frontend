

import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/Auth/SignUp";
import SignIn from "./pages/Auth/SignIn";
import LogOut from "./pages/Auth/SignOut";


function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp/>}/>
        <Route path="/SignIn" element={<SignIn/>}/>
        <Route path="/LogOut" element={<LogOut/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
