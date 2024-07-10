/* eslint-disable no-unused-vars */
import { arrayUnion, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';

export default function ViewPost() {
    const [post, setPost] = useState([]);
    const [postUsers, setPostUsers] = useState(null);

    const [newComment,setNewComment] = useState("");

    const navigate = useNavigate();
    useEffect(() => {
        fetchUsers();
        fetchPostFun();
    }, [])

    const fetchUsers = async () => {
        const querySnapshot = await getDocs(collection(db, "Student"))
        const users = {};
        // key : value 
        // 784asd : Anjali
        querySnapshot.forEach((doc) => {
            const record = doc.data();
            console.log("======> Record ", record);
            // users[doc.id] = record.name;
            console.log("---> doc id : ", doc.id);
            users[doc.id] = record.name;

        })
        console.log("users : ", users);
        setPostUsers(users);
    }

    const fetchPostFun = async () => {
        const querySnapshot = await getDocs(collection(db, "Post"))
        const fetchPost = [];

        querySnapshot.forEach((doc) => {
            const record = doc.data();
            //console.log("record ",record);  
            fetchPost.push({
                'id': doc.id,
                'title': record.title,
                'description': record.description,
                'image': record.image,
                'userid': record.userid,
                'likes' : record.likes || [],
                'comments' : record.comments || [],
                'createdAt': timeAgo(record.timestamp)
            })
        })
        setPost(fetchPost);
    }

    const timeAgo = (timestamp) => {
        const now = Date.now();
        const seconds = Math.floor((now - timestamp) / 1000);

        let interval = Math.floor(seconds / 31536000);
        if (interval > 1) {
            return `${interval} years ago`;
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return `${interval} months ago`;
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return `${interval} days ago`;
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return `${interval} hours ago`;
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return `${interval} minutes ago`;
        }
        return `${Math.floor(seconds)} seconds ago`;
    }


    const handleDelete = async (docid) => {
        console.log("---> delete ", docid);
        await deleteDoc(doc(db, "Post", docid));
        setPost(post.filter(item => item.id !== docid))

        // navigate("/dashboard",{replace:true})
    }

    const handleLike = async(postid) =>{
        const specific_post = await getDoc(doc(db,"Post",postid));

        const postDataLikeList = await specific_post.data().likes || [];

        console.log("---> postdata ",postDataLikeList);

        const user = auth.currentUser;

        if (postDataLikeList.includes(user.uid)) return;

        console.log("----> adding 1 like");

        await updateDoc(doc(db,"Post",postid),{
            "likes" : [...postDataLikeList,user.uid]
        })

        const updatePost = await post.map((post)=> post.id === postid ? {...post,'likes' : [...post.likes,user.uid]}  :post )

        setPost(updatePost);
    }
    const handleComment=async(postid)=>{
        const user = auth.currentUser;
        console.log("---> postid ",postid);
        const newCommentObj = {
            text : newComment,
            userid : user.uid,
            timestamp : Date.now()
        }
        await updateDoc(doc(db,"Post",postid),{
            "comments" : arrayUnion(newCommentObj)
        })
        setNewComment("")
        const updateCommentPost = await post.map((post) => post.id === postid ? {...post,"comments" : [...post.comments,newCommentObj]}  : post)

        setPost(updateCommentPost)

        console.log("---->>> NEWPOST : ",post);
    }

    return (
        <div>
            <h1>View All Post </h1>
            {post.map((singlePost, index) => {
                return <div key={index}>
                    <h4>{singlePost.title}   {singlePost.createdAt}</h4>
                    <h3>{singlePost.userid}</h3>
                    <h4>posted by : {postUsers[singlePost.userid]}</h4>
                    <p>{singlePost.description}</p>
                    <img src={singlePost.image} height={50} width={50} />
                    <button onClick={() => handleDelete(singlePost.id)}>Delete</button>
                    <br></br>
                    <h3>Likes : {singlePost.likes?.length || 0}</h3>
                    <button onClick={()=> handleLike(singlePost.id)}>Like</button>

                    <br></br>
                    <br></br>

                    <h3>Comment Sections : </h3>

                    {singlePost.comments?.length > 0 
                    ?   
                        singlePost.comments.map( (comment,index) => {
                            
                            return <div key={index}>
                                <p>Posted by : {postUsers[comment.userid]} :- {comment.text} AT : {timeAgo(comment.timestamp)}</p>
                            </div>
                        } )
                        
                    : 
                    <p>No Comments Found</p>}

                    <input type='text' value={newComment} onChange={(e)=>setNewComment(e.target.value)} placeholder='Type your comments' />
                    <button onClick={()=>handleComment(singlePost.id)}>Add Comment</button>
                    <hr></hr>
                    <hr></hr>
                </div>
            })}
        </div>
    )
}
