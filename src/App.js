import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import apod from "./apod";
import Header from "./Header"


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
     nasaData && <Header copyright={nasaData.copyright} title={nasaData.title}/>
     }
     
     {
     nasaData && <img src={nasaData.url} />
     }
    </div>
  );
}

export default App;
