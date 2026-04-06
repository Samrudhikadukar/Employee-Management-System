import React, {  useEffect,useState } from 'react'
import { createEmployee, getEMployee, updateEmployee } from '../services/EmployeEservice'
import { useNavigate,useParams} from 'react-router-dom'
import { getAllDepartments } from '../services/DepartmentService'


const EmployeeComponent = () => {

    const[firstname,setfirstname]=useState("")
    const[lastname,setlastname]=useState("")
    const[email,setemail]=useState("")
    const {id}=useParams();
    const[departmentId,setDeparmentId]=useState('')
    const[departments,setDepartments]=useState([])
   useEffect(()=>{
    getAllDepartments().then((response)=>{
        console.log("FULL RESPONSE:", response);       // 👈
        console.log("DATA:", response.data);           // 👈
        setDepartments(response.data);  
    }).catch(error=>{
        console.error(error);
    })
},[])
    const[errors, setErrors]= useState({
        firstname:"",
        lastname:"",
        email:"",
        departmentId:""
    })
    
    const navigator=useNavigate();

    useEffect(() => {
   if(id){
      getEMployee(id) .then((response) => {
              setfirstname(response.data.firstname);
            setlastname(response.data.lastname);
            setemail(response.data.email);
            setDeparmentId(response.data.departmentId);
            
        })
        .catch((error) => {
            console.error(error);
        });
   }

}, [id]);

    function saveorupdateEmployee(e){
        e.preventDefault();

        if(validateFrom()){
             const employee={firstname,lastname,email,departmentId}
             console.log(employee);
             
             if(id){
             console.log(employee);
            updateEmployee(id,employee).then((response)=>{
                console.log(response.data);
                navigator('/employees');

            }).catch(error=>{
                console.error(error);
            })
        }
        else{
          createEmployee(employee).then((response)=>{
            console.log(response.data);
            navigator('/employees');
        }).catch(error=>{
                console.error(error);
            })
        }
        

    }
        
    
 }

    function validateFrom(){
        let  valid=true;
        const errorCopy={... errors}
        if(firstname.trim()){
            errorCopy.firstname='';
        }
        else{
            errorCopy.firstname='Frist name is required';
            valid=false;
        }
        if(lastname.trim()){
            errorCopy.lastname='';
        }
        else{
            errorCopy.lastname='Lastname is required';
            valid=false;
        }
        if(email.trim()){
            errorCopy.email='';
        }
        else{
            errorCopy.email='Email is required';
            valid=false;
        }
        if(departmentId){
            errorCopy.departmentId=''
        }else{
            errorCopy.departmentId='Select department'
            valid=false
        }
        setErrors(errorCopy);
        return valid;
    }

    function pageTitle(){
        if(id){
            return <h2 className='text-centre'>Update Employee</h2>
         }
         else{
            return <h2 className='text-centre'>Add Employee</h2>
         }
    }
  return (
    <div className='container'>
        <br></br> <br></br>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {pageTitle()}
                <div className='card-body'>
                    <form>
                        <div className='form-gruop mb-2'>
                            <label className='from-lable'>FirstName:</label>
                            <input type='text' placeholder='Enter  Employee Firstname' name='firstname' value={firstname} className={`form-control ${errors.firstname ?'is-invalid':""}`} onChange={(e)=>setfirstname(e.target.value)}>
                            </input>
                            {errors.firstname&&<div className='invalid-feedback'>{errors.firstname}</div>}

                        </div>
                        <div className='form-gruop mb-2'>
                            <label className='form-label'>LastName:</label>
                            <input type='text' placeholder='Enter  Employee Lastname ' name='lastname' value={lastname} className={`form-control ${errors.lastname ?'is-invalid':""}`} onChange={(e)=> setlastname(e.target.value)}>
                            </input>
                            {errors.lastname&&<div className='invalid-feedback'>{errors.lastname}</div>}

                        </div>
                        <div className='form-gruop mb-2'>
                            <label className='form-label'>Email:</label>
                            <input type='text' placeholder='Enter  Employee Email ' name='email' value={email} className={`form-control ${errors.email ?'is-invalid':""}`} onChange={(e)=>setemail(e.target.value)}>
                            </input>
                            {errors.email&&<div className='invalid-feedback'>{errors.email}</div>}

                        </div>
                        <div className='form-gruop mb-2'>
                            <label className='form-label'>Select Department:</label>
                           <select className={`form-control ${errors.departmentId ?'is-invalid':""}`}
                           value={departmentId}
                          onChange={(e)=>setDeparmentId(Number(e.target.value))}
                           >
                            <option value="">Select Department</option>
                             {
                                departments.map(department=>
                                    <option key={department.id}value={department.id}>{department.departmentname}</option>
                                    
                                )
                             }
                           </select>
                            {errors.departmentId&&<div className='invalid-feedback'>{errors.departmentId}</div>}

                        </div>
                        <button className='btn btn-success' onClick={saveorupdateEmployee}>Submit</button>
                    </form>
                </div>

            </div>
        </div>

    </div>
  )
}

export default EmployeeComponent