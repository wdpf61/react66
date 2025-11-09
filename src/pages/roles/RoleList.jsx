import axios from 'axios';
import React, { useEffect, useState } from 'react';


const RoleList = () => {
  
const[roles,setRoles]=useState([]);
 useEffect( 
  ()=>{
     

    axios({
        url:"http://192.168.88.250/project/admin/api/role",
        method:"GET",
        data:{}
     })
    .then((res)=>{
         console.log(res.data); 
         setRoles(res.data.roles) 
    })
    .catch((err)=>{
        console.log(err);
    });
     
  }
  ,[]);
  
  // userEffetc 
  // axios
  // useState
  // map
  
  
  return (
   <>
   
   
 <table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
     
    </tr>
  </thead>
  <tbody>
   { roles.map((role,i)=>(

   <tr>
      <th scope="row">{i}</th>
      <td>{role.name}</td>
    </tr>
   ))}
    


    
    
  </tbody>
</table>

   
   
   
   </>
  )
}

export default RoleList