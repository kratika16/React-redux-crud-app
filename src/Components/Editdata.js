import {find, filter, toNumber,get}from 'lodash';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation} from 'react-router';
import { editData } from '../Redux/Action/DataAction';
import { useNavigate } from 'react-router';
const Editdata = () => {
    const [name, setName] =useState("");
    const [designation, setDesignation]= useState("");
    const [salary, setSalary]= useState("");
    const [department, setDepartment]= useState([]);

    const oldData = useSelector((state)=>state.emp);
    const {pathname}= useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //const params = useParams();
    
    useEffect (()=>{
      const id = parseInt(pathname.replace("/edit-data/",""));
      const currentdata = find(
        filter(
          get(oldData, "empinfo"),
          (o)=> toNumber(o.empid)=== (id)
        )
        
      );
      console.log("current", currentdata)
      setName(currentdata.name);
      setDesignation(currentdata.designation);
      setSalary(currentdata.salary);
      setDepartment(currentdata.department)
    },[]);
    
    const handleSubmit =(e)=>{
      e.preventDefault();
  
      const dataset = {
        empid: parseInt(pathname.replace("/edit-data/","")),
        name: name,
        designation: designation,
        salary: salary,
        department: department,
      }
      if(dataset){
        dispatch(editData(dataset));
        // console.log(dispatch(editData(data)))
      }
      console.log("data", dataset)
      navigate('/')
    }
    const departmentchange = (e)=>{
      if(e.target.checked){
        setDepartment([...department, e.target.value]);
      }
      else{
        setDepartment(
        filter(department, (d)=>d!==e.target.value)
        );
      }
    };
    
  return (
    <div>
        <div className='container-fluid'>
          <h1 className='my-3 text-center' data-testid = "editheading"> Edit Employee Details here!!</h1>
          <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
         <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <input
                data-testid = "inputname"
                className='form-control'
                type= 'text'
                placeholder='Name'
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
                value = {designation}
                onChange= {(e)=> setDesignation(e.target.value)}

                />
            </div>
            <br/>
            <div className='form-group'>
                <input
                data-testid= "inputsal"
                className='form-control'
                type= 'number'
                placeholder='Salary'
                value = {salary}
                onChange= {(e)=> setSalary(e.target.value)}
                />
            </div>
            <br/>
            <div className='form-group'>
            <p data-testid = "sel-dep"><b>Select Department</b></p>
            <input type= "checkbox"
            value= "Development"
            name= 'department'
            checked = {department.includes("Development")}
            onChange = {departmentchange}
            />
            <label htmlFor='department'>Development</label>
            <br/>
            <input type= "checkbox"
            value= "Management"
            name= 'department'
            checked = {department.includes("Management")}
            onChange = {departmentchange}
            />
            <label htmlFor='department'>Management</label>
            <br/>
            <input type= "checkbox"
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
                className="btn btn-block btn-dark"
                type="submit"
                value="Update"
              />
            </div>
        </form>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Editdata