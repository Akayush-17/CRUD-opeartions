import React,{useEffect, useState} from 'react';
import axios from "axios";
import {NavLink} from 'react-router-dom';

const Read = () => {   

    const [data, setData]=useState([]);
    

    function getData() {
        axios.get("https://647b8829d2e5b6101db1671f.mockapi.io/Crudoperations").then((res) => {
            console.log(res.data);
            setData(res.data);
        })
    }

    function handleDelete(id) {
      axios.delete(`https://647b8829d2e5b6101db1671f.mockapi.io/Crudoperations/${id}`
      ).then(()=>{
        getData()
      })
    
    }

    const setLocalStorage = (id,name,email) => {
      localStorage.setItem("id",id);
      localStorage.setItem("name",name);
      localStorage.setItem("email",email);
    }
    useEffect(()=>{
      getData();
    },[]);

    
  return (
    <>
    <h1>READ</h1>
    <table className="table table-dark table-striped">
        <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">NAME</th>
      <th scope="col">EMAIL</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  {
    data.map((eachData)=>{
      return (
        <>
         <tbody>
    <tr>
      <th scope="row">{eachData.id}</th>

      <td>{eachData.name}</td>
      <td>{eachData.email}</td>
      
      <td>
        <NavLink to="/update">
      <button
      onClick={()=>{
        setLocalStorage(
          eachData.id,
          eachData.name,
          eachData.email

        )
      }}
      type="button" className="btn btn-outline-success">Edit</button>
      </NavLink>
      </td>
      <td>
      <button 
      onClick={()=> handleDelete(eachData.id)}
      type="button" className="btn btn-outline-danger">Delete</button>
      </td>
    </tr>
    
  
  </tbody>
        
        
        </>
      )

    })
   }
  
</table>
</>
  )
}

export default Read