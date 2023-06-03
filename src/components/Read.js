import React from 'react';
import axios from "axios";

const Read = () => {

    function getData() {
        axios.get("https://647b8829d2e5b6101db1671f.mockapi.io/Crudoperations").then((res) => {
            console.log(res);
        })
    }

    getData();
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
  <tbody>
    <tr>
      <th scope="row">1</th>

      <td>Name</td>
      <td>Email</td>
      
      <td>
      <button type="button" className="btn btn-outline-success">Edit</button>

      </td>
      <td>
      <button type="button" className="btn btn-outline-danger">Delete</button>
      </td>
    </tr>
    
  
  </tbody>
  
</table>
</>
  )
}

export default Read