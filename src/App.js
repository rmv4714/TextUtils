
import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/textForm';
import React, { useState } from 'react'
import Alert from './components/Alert';






function App() {
  const [mode,setMode ] = useState('dark');
  const[alert,setAlert] = useState(null);


  const showAlert = (message , type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled ","success");
      document.title = "TextUtils - Dark Mode";
      
      /*setInterval(() =>{
        document.title = 'textUtils is amazaing mode';
      }, 3000);
      */
    }
    else 
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled ","success");
      //---------title change--------//
      document.title = "TextUtils - Light Mode";
    }
    
  }
  return (
    
    <>
      <Navbar  title = "TextUtils" mode={mode} toggleMode = {toggleMode} />
      <div container="app">
        <Alert  alert={alert}/>
        </div>
      
      <div className="container my-3 ">
      
         
             <TextForm  showAlert = {showAlert} heading="Enter the text to analyze" mode={mode} />
        
          
          
      
      </div>
    
    


   </> 
  );
}

export default App;
