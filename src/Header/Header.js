import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand mx-3" href = '/crud'>REACT REDUX CRUD APP</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <Link to='/enter' className="btn btn-light mx-3" >
            Enter
     </Link>
     
     <Link to='/' className="btn btn-light" >
            Table
     </Link>
    </nav>
    </div>
  )
}

export default Header