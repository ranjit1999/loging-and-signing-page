import React from 'react';
import './index.css';
import NavBar from './components/NavBar';
import FormData from './components/FormData'


function App() {
  return (

    <div className="App">
       <NavBar/>
       <div className="d-flex flex-row justify-content-center " style={{marginTop:"20px"}}>
           <strong><p style={{fontSize:"20px"}}>Create Your Account</p></strong>
       </div>
       <div className="d-flex flex-column justify-content-center " >
           <FormData/> 
       </div>
      
    </div>
  
  );
}

export default App;
