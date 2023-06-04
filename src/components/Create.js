import React,{useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {NavLink} from 'react-router-dom';

const Create = () => {
  
  const header = {"Access-Control-Allow-origin":"*"};
  const history =useNavigate()
  const handleClick = (e)=>{
    e.preventDefault();
    axios.post('https://647b8829d2e5b6101db1671f.mockapi.io/Crudoperations',{
       name : name, 
       email: email,
       header,
    })

    .then(()=>{
      history("/read")

    });
    
   
  };

  const [name, setName] =useState("");
  const [email, setEmail]=useState("");
  return ( 
    <>
    <div className='d-flex justify-content-between m-2'>
    <h1>CREATE</h1>
    <NavLink to="/read">
      <button className='btn btn-primary'>Show Data</button>
    </NavLink>
    </div>
    
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