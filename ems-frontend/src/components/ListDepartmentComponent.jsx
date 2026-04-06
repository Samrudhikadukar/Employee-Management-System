import React, { useEffect, useState } from 'react'
import { deleteDepartment, getAllDepartments } from '../services/DepartmentService';
import { Link,useNavigate } from 'react-router-dom';

const ListDepartmentComponent = () => {

  useEffect(()=>{
   listOfDepartments();
  },[])

  const navigator=useNavigate();

 const[departemts,setDepartments]= useState([]);

 function listOfDepartments(){
   getAllDepartments().then((respone)=>{
      console.log(respone.data);
      setDepartments(respone.data);
    }).catch(error=>{
      console.error(error);
    })

 }
 function updateDepatment(id){
   navigator(`/edit-department/${id}`)
 }

 function removeDepartment(id){
         console.log(id);
        deleteDepartment(id).then((response)=>{
         listOfDepartments();
 
        }).catch(error=>{
         console.log(error);
        })
 
     }
  return (
    <div className='container'>
      <h1 className='text-centre'>Department list</h1>
      <Link to='/add-department' className='btn btn-primary mb-2'>Add Department</Link>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Department ID</th>
            <th>Department Name</th>
            <th>Department Dec</th>
          </tr>
        </thead>
         <tbody>
            {
              departemts.map(department=>
                <tr key={department.id}>
                  <td>{department.id}</td>
                  <td>{department.departmentname}</td>
                  <td>{department.departmentdiscription}</td>
                  <td>
                    <button className='btn btn-info me-3' onClick={()=>updateDepatment(department.id)}>Update</button>
                    <button className='btn btn-danger' onClick={()=>removeDepartment(department.id)}>Delete</button>
                    </td>
                </tr>
              )
            }
          </tbody>
      </table>
      
    </div>
  )
}

export default ListDepartmentComponent
