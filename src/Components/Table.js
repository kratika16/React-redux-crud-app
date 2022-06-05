import _ from 'lodash';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { deleteData } from '../Redux/Action/DataAction';
//import { editData } from '../Redux/Action/DataAction';

const Table = () => {
    const dispatch = useDispatch();
    const {empinfo}= useSelector((state)=>state.emp);
    console.log("emp", empinfo)
   
    const handleDelete = (id)=>{
        dispatch(deleteData(id))
    }
  return (
      
    <div>
        <Header/>
        <div className='my-3'>
        <div className='container'>
            <table className='table table-hover'>
                 <thead className='table-header bg-dark text-white'>
                     <tr>
                         <th scope= "col">EMP ID</th>
                         <th scope= "col">EMP NAME</th>
                         <th scope= "col">EMP DESIGNATION</th>
                         <th scope= "col">EMP SALARY</th>
                         <th scope= "col">EMP DEPARTMENT</th>
                         <th scope= "col">ACTIONS</th>
                     </tr>
                 </thead>
                 <tbody>
                     {empinfo.length && _.map(empinfo, ((row,i)=>{
                         return(
                             <tr key = {i}>
                                 <td>{row.empid}</td>
                                 <td>{row.name}</td>
                                 <td>{row.designation}</td>
                                 <td>{row.salary}</td>
                                 <td>
                                     {_.join(_.map(row.department, (d)=>{
                                         return _.camelCase(d)
                                     }),",")}
                                 </td>
                                 <td>
                                     <Link to= {`/edit-data/${row.empid}`}>
                                         <button className='btn btn-sm btn-primary mr-1 mx-2'>
                                            Edit 
                                         </button>
                                     </Link>
                    
                                     <button className=' btn btn-sm btn-danger'
                                     onClick={()=> handleDelete(row.empid)}>
                                         Delete
                                     </button>
                                 </td>
                             </tr>
                         )
                     })) }
                 </tbody>
            </table>
        </div>
        </div>
    </div>
  )
}

export default Table