import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';

export default function RegistrationPage() {
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [error,setError] = useState();
    const [msg,setMsg] = useState();

    const navigate = useNavigate();

    

    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log("---> submit button clicked");

        const userCreditentials  =  await createUserWithEmailAndPassword(auth,email,password);
        
        const user = userCreditentials.user;
        // console.log(user.uid);
        if(user)
        {
          await setDoc(doc(db,"Student",user.uid),{
            'name' : name,
            'email' : email,
          })  

          console.log("successfully record inserted");
          setMsg("successfully record inserted");
        }
    }
  return (
    <div>
      <form onSubmit={(e)=>handleSubmit(e)}>
        {msg && <p style={{color:"green"}}>{msg}</p>}
        <input type='text' onChange={(e)=>setName(e.target.value)} placeholder='Enter name'/>
        <br></br>
        <input type='text' onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email'/>
        <br></br>
        <input type='text' onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password'/>
        <br></br>
        <button>Submit</button>
        <br></br>
        
        <Link to={"/Guest"}><h4>GUEST USER</h4></Link>
      </form>
        <p onClick={()=>navigate("/login",{replace:true})}>Already registered ? click here for login</p>
    </div>
  )
}
