import React, { useState } from 'react'
import { createDepartmrnt, getDepartmentById, updateDepartment } from '../services/DepartmentService';
import { useNavigate,useParams } from 'react-router-dom';
import { useEffect } from 'react';

const DepartmentComponent = () => {

    const [departmentname, setDepartmentName] = useState('');
    const [departmentdiscription, setDepartmentDec] = useState('');
    const{id}=useParams();
   const navigator = useNavigate();

   useEffect(()=>{
     getDepartmentById(id).then((response)=>{
        setDepartmentName(response.data.departmentname);
        setDepartmentDec(response.data.departmentdiscription);
     }).catch(error=>{
        console.error(error);
     })

   },[id])

    function saveorupdateDepartment(e) {
        e.preventDefault();

        const department = {
            departmentname,
            departmentdiscription
        };

        console.log(department);
        if(id){
            updateDepartment(id,department).then((response)=>{
                console.log(response.data);
                navigator(`/department`);
            }).catch(error=>{
                console.error(error);
            })
        }
        else{
            createDepartmrnt(department).then((response)=>{
            console.log(response.data);
            navigator('/department')
        }).catch(error=>{
            console.error(error);
        })
    }
        }

        
     function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update Departments</h2>
        } else{
            return <h2 className='text-center'>Add Departments</h2>
        }

     }
    return (
        <div className='container'>
            <br /><br />
            <div className='row'>
                <div className='card col-md-6 offset-md-3'>

                    {
                        pageTitle()
                    }

                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Enter Department Name:</label>
                                <input
                                    type='text'
                                    name='departmentname'
                                    placeholder='Enter Department name'
                                    value={departmentname}
                                    onChange={(e) => setDepartmentName(e.target.value)}
                                    className='form-control'
                                />
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Enter Description:</label>
                                <input
                                    type='text'
                                    name='departmentdiscription'
                                    placeholder='Enter Description'
                                    value={departmentdiscription}
                                    onChange={(e) => setDepartmentDec(e.target.value)}
                                    className='form-control'
                                />
                            </div>

                            <button onClick={saveorupdateDepartment} className='btn btn-success'>
                                Submit
                            </button>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DepartmentComponent