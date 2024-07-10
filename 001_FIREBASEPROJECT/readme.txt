-> register 
        - authentication                        - firestore                 

        createuserwithemailandpassword(auth,email,password)  (it will store email and password in firebase auth)

        setDoc(doc(db,"collectionname",userid),{
            'key' : value,
            'key' : value
        })


-> login 
    signinwithemailandpassword(auth,email,password)

        getDoc(doc(db,"collectionname",userid))

---> fetch specific user : 

        getDoc(doc(db,"collectionname",userid))

-> fetch all users : 

        getDocs(collection(db,"collectionname"))

-> delete specific user :

        deleteDoc(doc(db,"collectionname",userid))
    
-> update specific user : 

        updateDoc(doc(db,"collectionname",userid),{
            'key' : value,
            'key' : value
        })