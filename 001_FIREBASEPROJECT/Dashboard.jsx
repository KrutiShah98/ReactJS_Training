/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { auth, db, storage } from '../../firebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { getDownloadURL, ref,uploadBytes } from 'firebase/storage';

export default function Dashboard() {
    const [userDetails,setUserDetails] = useState(null);
    const [profileUrl,setProfileUrl] = useState();
    const [uplodingStatus,setUploadingStatus] = useState(false);

    const navigate = useNavigate();
    useEffect(()=>{
        const subscirbe = onAuthStateChanged(auth,(user)=>{
            if(user)
            {
                fetchCurrentUserDetails(user);
            }
            
        })
        
    },[]);

    const fetchCurrentUserDetails=async(user)=>{
        // const user = auth.currentUser;
        if(user)
            {
                const userData =await getDoc(doc(db,"Student",user.uid));
                console.log(`welcome dashboard   ${userData.data().name}`);
                console.log(`welcome dashboard   ${userData.data().profilepic}`);
                setUserDetails(userData.data());
            }
    }

    const hanldeLogout =async ()=>{ 
        await signOut(auth);
        navigate("/login",{replace:true});
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log("---->profileUrl",profileUrl);
        setUploadingStatus(true);
        const user = auth.currentUser;
        const storageRef = await ref(storage,`profilepictures/${user.uid}`);
        // const storageRef = await ref(storage,`profilepictures/mypic`);
        await uploadBytes(storageRef,profileUrl);
    
        const downloadUrl = await getDownloadURL(storageRef)
        console.log("---> download URL ",downloadUrl);

        await updateDoc(doc(db,"Student",user.uid),{
            'profilepic' : downloadUrl
        })

        const userData =await getDoc(doc(db,"Student",user.uid));
        setUserDetails(userData.data());

        setUploadingStatus(false);
    }
  return (
    <div>
        
        {userDetails ?  <h1>Welcome {userDetails.name}  email : {userDetails.email}</h1> : <h1>Loading....</h1>}
            {userDetails?.profilepic ? <img src={userDetails?.profilepic} width={50} height={50}></img> : <img src="https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049569.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1707177600&semt=ais" width={50} height={50}></img>}
            <form onSubmit={(e)=>handleSubmit(e)}>
                <label>Upload your image</label>
                <input type='file'  onChange={(e)=>setProfileUrl(e.target.files[0])}></input>
                <input type='submit' value="upload"></input>
            </form>
        
        <button onClick={hanldeLogout}>Logout</button>

        <h1 onClick={()=>navigate("/newpost")}>Add New Post</h1>

        <h1 onClick={()=>navigate("/mypost")}>View My Post</h1>

        <h1 onClick={()=>navigate("/viewpost")}>View All Post</h1>

        <h1 onClick={()=>navigate("/allusers")}>View All Users</h1>
    </div>
  )
}
