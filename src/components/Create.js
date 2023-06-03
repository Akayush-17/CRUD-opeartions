import React,{useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Create = () => {
  
  const header = {"Access-Control-Allow-origin":"*"};
  const history =useNavigate()
  const handleClick = (e)=>{
    e.preventDefault();
    axios.post('https://647b8829d2e5b6101db1671f.mockapi.io/Crudoperations',{
       name : name, 
       email: email,
       header,
    });
    history("/read")
   
  };

  const [name, setName] =useState("");
  const [email, setEmail]=useState("");
  return ( 
    <>
    <h1>CREATE</h1>
    <form>
  <div className="mb-3">
  <label for="exampleInputPassword1" class="form-label">Name</label>
    <input 
    onChange={(e)=> setName(e.target.value)}
    type="text" className="form-control" id="exampleInputPassword1"/>
   
  </div>
  <div className="mb-3">
  <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input 
    onChange={(e)=> setEmail(e.target.value)}
    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
   
  </div>
  
  <button 
  onClick={handleClick}
  type="submit" className="btn btn-primary">Submit</button>
</form>
    
    </>
  )
}

export default Create