import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/employees";

// this is just a simplified version of below function
// export const listEmployees =()=> axios.get(REST_API_BASE_URL);

export const listEmployees =()=>{
    return axios.get(REST_API_BASE_URL);
}

export const createEmployee = (employee)=>{
   return  axios.post(REST_API_BASE_URL,employee);
}

















