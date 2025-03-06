import React, {useEffect, useState} from 'react';
import {listEmployees} from "../services/EmployeService.js";
import {useNavigate} from "react-router-dom";

const ListEmployeeComponent = () => {

    const [employees,setEmployees] =  useState([]);
    const navigator = useNavigate();

    useEffect(()=>{
        listEmployees().then((response)=>{
            setEmployees(response.data)
        }).catch(error=>{
            console.error(error)
        })
    },[])


    function AddNewEmployee(){
        navigator('/add-employee')
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