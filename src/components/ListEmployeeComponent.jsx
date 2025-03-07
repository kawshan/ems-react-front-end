import React, {useEffect, useState} from 'react';
import {deleteEmployee, listEmployees} from "../services/EmployeService.js";
import {useNavigate} from "react-router-dom";

const ListEmployeeComponent = () => {

    const [employees,setEmployees] =  useState([]);
    const navigator = useNavigate();

    useEffect(()=>{
        getAllEmployees();
    },[])

    function getAllEmployees(){
        listEmployees().then((response)=>{
            setEmployees(response.data)
        }).catch(error=>{
            console.error(error)
        })
    }



    function AddNewEmployee(){
        navigator('/add-employee')
    }

    function updateEmployee(id){
        navigator(`/edit-employee/${id}`)
    }

    function removeEmployee(id){
        console.log(id);

        deleteEmployee(id).then((response)=>{
            console.log(response.data)
            alert(`employee deleted successfully`);
            getAllEmployees();
        }).catch(error=>{
            console.error(error)
        })

    }


    return(
        <div>
            <h2 className="text-center bg-secondary p-4">list employee component</h2>
            <button className="btn btn-primary mb-2" onClick={AddNewEmployee}>Add Employee</button>
        <table className="table table-bordered mt-5">
            <thead className="table-success text-center">
            <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>email</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {
                employees.map(employee=>
                <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                    <td>
                        <button className="btn btn-warning" onClick={()=>updateEmployee(employee.id)}>update</button>
                        <button className="btn btn-danger ms-3" onClick={()=>removeEmployee(employee.id)}>update</button>
                    </td>
                </tr>
                )
            }

                <tr>

                </tr>
            </tbody>
        </table>
        </div>
    )
};

export default ListEmployeeComponent;