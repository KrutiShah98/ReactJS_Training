// Condition based rendering 

import Login from "./ExtraCom/Login";
import Profile from "./ExtraCom/Profile";

export default function JsxExample3() {

    const isloggin  = false;
  return (
    <div>
        {/* ternary operator or conditional operator 
        ternary operator divided in 3 parts 
        ternary operator represent with  ? : 
        syntax :   exp1 ?  exp2  : exp3 
        if exp1 true it will execute exp2 otherwise it will execute exp3  */}


        {isloggin  ?  <Profile/>  : <Login/>}
    </div>
  )
}
