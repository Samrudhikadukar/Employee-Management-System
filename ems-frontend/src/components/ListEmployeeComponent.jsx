import React ,{useEffect, useState}from 'react'
import { deleteEmployee, ListEmployee } from '../services/EmployeEservice'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {
    const navigator=useNavigate();
    const[employees,SetEmployess]=useState([])
    useEffect(()=>{
        getAllEmployees();
        
    },[])

    function getAllEmployees(){
        ListEmployee().then((response)=>{
            SetEmployess(response.data);
        }).catch(error=>{
            console.error(error);
        })
    }
    
    function addNweEmployee(){
        navigator('/add-employee');
    }

    function updateEmployee(id){
        navigator(`/edit-employee/${id}`);
    }

    function removeEmployee(id){
        console.log(id);
       deleteEmployee(id).then((response)=>{
        getAllEmployees();

       }).catch(error=>{
        console.log(error);
       })

    }
  return (
    <div className='container'>
        <br></br>
       <h1 className='text-center'>List Of Employees</h1>
       <button className='btn btn-primary mb-2' onClick={addNweEmployee}> AddEmploye</button>
        <table className='table table-striped table-bordered'> 
            <thead>
            <tr>
                <th>EmployeeID</th>
                <th>Employee FristName</th>
                <th>Employee LastName</th>
                <th>Employee Email</th>
                <th>Actions</th>

            </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee =>
                        <tr key ={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstname}</td>
                            <td>{employee.lastname}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button className='btn btn-info me-3' onClick={()=>updateEmployee(employee.id)}>Update</button>
                                <button className='btn btn-danger' onClick={()=>removeEmployee(employee.id)}>Delete</button>
                            </td>
                        </tr>

                    )
                       
                }
            </tbody>
            
        </table>
    </div>
  )
}

export default ListEmployeeComponent