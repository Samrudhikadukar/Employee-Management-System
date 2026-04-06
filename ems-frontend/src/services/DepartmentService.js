import axios from 'axios';
const REST_API_BASE_URL = 'http://localhost:8080/api/departments';


export const getAllDepartments =()=>axios.get(REST_API_BASE_URL);

export const createDepartmrnt =(department)=>axios.post(REST_API_BASE_URL,department);

export const getDepartmentById=(departmrntId)=>axios.get(REST_API_BASE_URL+'/'+departmrntId);

export const updateDepartment=(departmrntId,department)=>axios.put(REST_API_BASE_URL+'/'+departmrntId,department);

export const deleteDepartment=(departmentId)=>axios.delete(REST_API_BASE_URL+ '/' + departmentId);