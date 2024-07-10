/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { auth, db, storage } from '../../firebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export default function NEWPOST() {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [imageLink,setImageLink] = useState();

    const navigate=useNavigate();
    const handleSubmit=async()=>{

        const user = auth.currentUser;
        const storageRef = await ref(storage,`post/${user.uid}/${Date.now()}`);
        await uploadBytes(storageRef,imageLink);
        const downloadUrl = await getDownloadURL(storageRef)

        await setDoc(doc(db,"Post",`${Date.now()}`),{
            'title' : title,
            'description' : description,
            'image' : downloadUrl,
            'userid' : user.uid,
            'timestamp' : Date.now()
        })

        navigate("/viewpost",{replace:true});
    }

  return (
    <>
            <h1>Add New Post</h1>  
            <input type='text' placeholder='Enter title' onChange={(e)=>setTitle(e.target.value)}></input>
            <br></br>
            <textarea placeholder='Enter description' onChange={(e)=>setDescription(e.target.value)}></textarea>
            <br></br>
            <input type='file' onChange={(e)=>setImageLink(e.target.files[0])}/>

            <br></br>
            <button onClick={handleSubmit}>Add Post</button>

    </>
  )
}
