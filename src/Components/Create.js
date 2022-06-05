import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router'
import { enterData } from '../Redux/Action/DataAction';
import _ from 'lodash';

const Create = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName]= useState("");
  const [designation, setDesignation]= useState("");
  const [salary, setSalary]= useState("");
  const [department, setDepartment]= useState([]);

  const handleSubmit =(e)=>{
    e.preventDefault();

    const data = {
      empid: Math.floor(Math.random()*100),
      name: name,
      designation: designation,
      salary: salary,
      department: department,
    }
    if(data){
      dispatch(enterData(data));
    }
    console.log("data", data)
    navigate('/')
  }
  const departmentchange = (e)=>{
    if(e.target.checked){
      setDepartment([...department, e.target.value]);
    }
    else{
      setDepartment(
        _.filter(department, (d)=>d!==e.target.value)
      );
    }
  };


  return (
      <div className='container-fluid'>
          <h1 className='my-3 text-center' data-testid = "enterheading">Enter Employee Details here!!</h1>
          <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
         <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <input
                data-testid = "inputname"
                className='form-control'
                type= 'text'
                placeholder='Name'
                required
                value = {name}
                onChange= {(e)=> setName(e.target.value)}
                />
            </div>
            <br/>
            <div className='form-group'>
                <input
                data-testid = "inputdes"
                className='form-control'
                type= 'text'
                placeholder='Designation'
                required
                value = {designation}
                onChange= {(e)=> setDesignation(e.target.value)}

                />
            </div>
            <br/>
            <div className='form-group'>
                <input
                data-testid = "inputsal"
                className='form-control'
                type= 'number'
                placeholder='Salary'
                required
                value = {salary}
                onChange= {(e)=> setSalary(e.target.value)}
                />
            </div>
            <br/>
            <div className='form-group'>
            <p data-testid = "sel-dep"><b>Select Department</b></p>
            <input type= "checkbox"
            data-testid = "cbshow1"
            value= "Development"
            name= 'department'
            checked = {department.includes("Development")}
            onChange = {departmentchange}
            />
            <label htmlFor='department'>Development</label>
            <br/>
            <input type= "checkbox"
            data-testid = "cbshow2"
            value= "Management"
            name= 'department'
            checked = {department.includes("Management")}
            onChange = {departmentchange}
            />
            <label htmlFor='department'>Management</label>
            <br/>
            <input type= "checkbox"
            data-testid = "cbshow3"
            value= "Finance"
            name= 'department'
            checked = {department.includes("Finance")}
            onChange = {departmentchange}
            />
            <label htmlFor='department'>Finance</label>
            <br/>
            </div>
            <br/>
            <div className="form-group">
              <input
                data-testid = "submit-btn"
                className="btn btn-block btn-dark"
                type="submit"
                value="Submit"
              />
            </div>
        </form>
        </div>
        </div>
        </div>
  )
}

export default Create