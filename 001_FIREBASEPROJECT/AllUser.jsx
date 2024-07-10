/* eslint-disable no-unused-vars */
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfig';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';

export default function AllUser() {
    const [currentUserRecord,setCurrentUserRecord] = useState();
    const [users,setUsers] = useState([]);
    const [currentuid,setUid] = useState(null);
    
    useEffect(()=>{
        const subscirbe = onAuthStateChanged(auth,(user)=>{
            if(user)
            {
                fetchCurrentUserDetails(user);
            }
        })
    },[]);

    useEffect(() => {
        if (currentuid) {
            fetchAllusers();
        }
    }, [currentuid]);

    const fetchCurrentUserDetails=async(user)=>{
        // const user = auth.currentUser;
        if(user)
            {
                const userData =await getDoc(doc(db,"Student",user.uid));
                setCurrentUserRecord(userData.data());

                console.log("----> current user id : ",userData.id);
                setUid(userData.id);
            }

            
    }

    const fetchAllusers=async()=>{  
        const querySnapshot = await getDocs(collection(db,"Student"))
        const allusersData = [];
        
        querySnapshot.forEach((doc)=>{ 
            const record = doc.data()       
            console.log("----> cid ",currentuid);
            console.log("----> did",doc.id);
            if(doc.id !== currentuid)
            {
                console.log(record);
                allusersData.push({uid : doc.id,...doc.data()})
            }
            // if (doc.id !== currentuid)
            // {
            //     allusersData.push({uid : doc.id,...doc.data()})
            // }
        })
        setUsers(allusersData);
        
    }

  return (
    <div>
    {currentUserRecord ? 
        <>
        <p>Logged In By : {currentUserRecord.name}  {currentUserRecord.uid}</p> 

        
        <table border={2}>
            <thead>
               <tr>
                    <th>SR. NO</th>
                    <th>IMAGE</th>
                    <th>Name</th>
                    <th>EMAIL</th>
                    <th colSpan={2}>Action</th>
               </tr> 
            </thead>
            <tbody>
                {users 
                    ? 
                    users.map((user,index)=>{
                        return <tr key={index}>
                                <td>{index+1}   </td>
                                <td>{user.profilepic? <img src={user.profilepic} height={50} width={50}/> : <img src="https://img.freepik.com/premium-photo/3d-icon-cartoon-person-profile-avatar-user-profile-3d-render-illustration_276199-401.jpg" height={50} width={50}/>}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                
                        </tr> 
                    })
                     : <h1>No Users Found</h1>
                }
            </tbody>
        </table>
        </>
      
        : <h1>Loading</h1>}
      
        
    </div>
  )
}
