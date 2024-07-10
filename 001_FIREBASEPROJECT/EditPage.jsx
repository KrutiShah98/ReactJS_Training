import { doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { db, storage } from '../../firebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

export default function EditPage() {
    const {uid} = useParams();

    const [name,setName] = useState();
    const [profilepic,setProfilePic] = useState();
    const [email,setEmail] = useState();
    const navigate = useNavigate();
    useEffect(()=>{
        fetchUser();
    },[uid])

    const fetchUser=async()=>{
        const userData = await getDoc(doc(db,"Student",uid))

        setName(userData.data().name);
        setProfilePic(userData.data().profilepic);
        setEmail(userData.data().email);
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();

        await updateDoc(doc(db,"Student",uid),{
            'name' : name
        })

        if(profilepic)
            {
                const storageRef = await ref(storage,`profilepictures/${uid}`);
                await uploadBytes(storageRef,profilepic);
                const downloadUrl = await getDownloadURL(storageRef)
                await updateDoc(doc(db,"Student",uid),{
                    'profilepic' : downloadUrl
                })
            }
        navigate("/Guest",{replace:true})
        
    }   
  return (
    <div>
        <form onSubmit={(e)=>handleSubmit(e)}>
        <h3>Edit User Details</h3>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter name'/>
        <br></br>
        <input type='text' value={email} placeholder='Enter email' disabled/>
        <br></br>
        <input type='file'  onChange={(e)=>setProfilePic(e.target.files[0])}></input>
        <br></br>
        <button>Update</button>
        <br></br>
    
      </form>
    </div>
  )
}
