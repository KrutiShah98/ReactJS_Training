/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function MapCrudExample() {
    const [name,setName] = useState("");
    const [subject,setSubject] = useState("");
    const [city,setCity] = useState("");

    const [records,setRecords] = useState([]);

    const [editIndex,setEditIndex] = useState(null);

    const handleSubmit=(e)=>{
        e.preventDefault();
        const newRecord = {name,subject,city};
        if(editIndex === null)
            {
                console.log("Button SUbmitted");

                
                setRecords([...records,newRecord])
        
                console.log("Successfully record added");
        
            
            }
        else
        {
            console.log("update");
            // let a = [10,20,30,40];
            // a[0] = 10001
            records[editIndex] = newRecord
            setRecords([...records]);
            setEditIndex(null);
        }
        setName("");
        setSubject("");
        setCity("");
    }

    const handleDelete=(index)=>{
        console.log(index);
        let lastRecords = records;  // fetch all records 
        console.log("before delete",lastRecords);
        lastRecords.splice(index,1) // remove selected index record 
        console.log("---",lastRecords);
        setRecords([...lastRecords]);  // update after delete record in existing record
    }

    const handleEdit=(index)=>{
      console.log(index);

      let fetchAllRecord = records;
      console.log("fetching all record ",fetchAllRecord);

      // now fetch specific index data 
      let singleRecord = fetchAllRecord[index];
      console.log("specific record",singleRecord);

      setName(singleRecord.name);
      setSubject(singleRecord.subject);
      setCity(singleRecord.city);

      setEditIndex(index);

    }

   
  return (
    <div>
        <form onSubmit={handleSubmit}>
            
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter name : '/> <br></br>
            <input type='text' value={subject} onChange={(e)=>setSubject(e.target.value)}  placeholder='Enter subject : '/> <br></br>
            <input type='text' value={city} onChange={(e)=>setCity(e.target.value)} placeholder='Enter city : '/> <br></br>
            <button type='submit'>{editIndex != null ? "update" : "submit"}</button>
            
        </form>

        <hr></hr>

        <table border={1}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Subject</th>
                    <th>City</th>
                    <th colSpan={2}>Action</th>
                </tr>
            </thead>
            <tbody>
            {records.map((item,index)=>{
                return <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.subject}</td>
                                <td>{item.city}</td>
                                <td><button onClick={()=>handleEdit(index)}>Edit</button></td>
                                <td><button onClick={()=>handleDelete(index)}>Delete</button></td>
                      </tr>
            })}
            </tbody>
        </table>
    </div>
  )
}
