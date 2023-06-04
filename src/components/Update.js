import React, { useEffect,useState } from 'react';
import {useNavigate} from "react-router-dom"
import axios from "axios"

const Update = () => {

const [id,setId] = useState(0);
const [name,setName] = useState("");
const [email,setEmail] = useState("");

useEffect(()=>{
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
},[]);

const naviagte = useNavigate();
const handleUpdate =(e)=>{
    e.preventDefault();
    axios.put(`https://647b8829d2e5b6101db1671f.mockapi.io/Crudoperations/${id}`,{
        name:name,
        email:email,
    }
    ).then(()=>{
       naviagte("/read");
    })
}

  return (
    <>
     <h1>UPDATE</h1>
    <form>
  <div className="mb-3">
  <label for="exampleInputPassword1" class="form-label">Name</label>
    <input 
    onChange={(e)=> setName(e.target.value)}
    value={name}
    type="text" className="form-control" id="exampleInputPassword1"/>
   
  </div>
  <div className="mb-3">
  <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input 
    onChange={(e)=> setEmail(e.target.value)}
    value={email}
    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
   
  </div>
  
  <button 
  onClick={handleUpdate}
  type="submit" className="btn btn-primary">Update</button>
</form>
    </>
  )
}

export default Update