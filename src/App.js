import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import apod from "./apod";
import Header from "./Header"
import Footer from "./Footer"
import MainContent from './MainContent'


function App() {

  const [nasaData, setNasaData] = useState(null)

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=jUbFwgIEb3r57xPtKB0pD9EKbukgWhNodtPNnEb2")
    .then(res => {
      console.log(res.data)
      setNasaData(res.data)
      
      
    })
    .catch(err => (
      console.log('error')
    ))
  }, [])

  return (
    <div className="App">
       {
     nasaData && <Header  title={nasaData.title}/>
     }
     
     {nasaData && <img src={nasaData.url} />}
    
    
     {nasaData && <Footer copyright={nasaData.copyright} date={nasaData.date} exp={nasaData.explanation}/>}
    


    </div>


     
  );
}

export default App;
