import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

export default function Login() {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    
    const navigate = useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const usercreditentials = await signInWithEmailAndPassword(auth,email,password);
        const user = usercreditentials.user;
          const userDoc =await getDoc(doc(db,"Student",user.uid));
          if(userDoc.exists)
          {
            console.log(userDoc.data());
            console.log(userDoc.data().name);
            alert(`welcome ${userDoc.data().name} `);
            navigate("/dashboard",{replace:true});
          }
        console.log(user.uid);
    }
  return (
    <div>
    <form onSubmit={(e)=>handleSubmit(e)}>
    
      <input type='text' onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email'/>
      <br></br>
      <input type='text' onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password'/>
      <br></br>
      <button>Submit</button>
   
      <h4 onClick={()=>navigate("/",{replace:true})}>New User ? click here for register</h4>

    </form>
  </div>
  )
}
