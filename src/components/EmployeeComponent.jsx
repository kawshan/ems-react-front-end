import React, {useState} from 'react';
import {createEmployee} from "../services/EmployeService.js";
import {useNavigate} from "react-router-dom";

function EmployeeComponent(props) {

    const [firstName, setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");

   const [errors,setErrors] =  useState({
        firstName:'',
        lastName:'',
        email:''
    })


    const navigator = useNavigate();

    //arrow function eka liwwath ekayi nikan function eka liwwanth ekayi
    const handleFirstName = (e)=>{
        setFirstName(e.target.value)
    }
    function handleLastName(e){
        setLastName(e.target.value);
    }


    function saveEmployee(e){
        e.preventDefault();


        if (validateForm()){
            const  employee = {firstName,lastName,email};
            console.log(employee);

            createEmployee(employee).then((response)=>{
                console.log(response.data);
                navigator('/employees');
            });
        }else {

        }


    }


    function validateForm (){
        let valid = true;

        const errorsCopy = {...errors} //copying errors into errors copy variable

        if (firstName.trim()){
            errorsCopy.firstName = ''
        }else {
            errorsCopy.firstName='first name is required';
            valid = false;
        }

        if (lastName.trim()){
            errorsCopy.lastName = '';
        }else {
            errorsCopy.lastName='last name is required';
            valid = false;
        }

        if (email.trim()){
            errorsCopy.email='';
        }else {
            errorsCopy.email='email is required';
            valid = false;
        }

    setErrors(errorsCopy);
        return valid;


    }



    return (
        <div>


            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3 mt-5">
                        <h2 className="text-center">Add Employee</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label htmlFor="" className="form-label">First Name</label>
                                    <input type="text" placeholder="Enter employee first name" name="firstName"
                                           value={firstName} className={`form-control ${errors.firstName ? 'is-invalid':''}`} onChange={handleFirstName}/>
                                    {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                                </div>


                                <div className="form-group mb-2">
                                    <label htmlFor="" className="form-label">Last Name</label>
                                    <input type="text" placeholder="Enter employee Last name" name="lastName"
                                           value={lastName} className={`form-control ${errors.lastName ? 'is-invalid':''}`} onChange={handleLastName}/>
                                    {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                                </div>


                                <div className="form-group mb-2">
                                    <label htmlFor="" className="form-label">Email</label>
                                    <input type="text" placeholder="Enter employee email" name="email"
                                           value={email} className={`form-control ${errors.email ? 'is-invalid':''}`} onChange={(e)=>setEmail(e.target.value)}/>
                                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                </div>


                                <button className="btn btn-success" onClick={saveEmployee}>submit</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default EmployeeComponent;