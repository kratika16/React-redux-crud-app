
import { Routes, Route } from 'react-router';
import './App.css';
import Create from './Components/Create';
import Editdata from './Components/Editdata';
import Table from './Components/Table';
//import Header from './Header/Header';

function App() {
  return (
    <>
    <Routes>
      <Route exact path ='/' element =  {<Table/>}/>
      <Route exact path ='/enter' element= {<Create/>}/>
      <Route exact path = '/edit-data/:id' element = {<Editdata/>}/>
    </Routes>
    </>
  );
}

export default App;
