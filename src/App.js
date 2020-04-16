import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import Header from "./Header"
import Footer from "./Footer"


const MainContent2 = (props) => {
  return(
  <div className='imgcontainer'>
      <img src={props.url}/>
  </div>
  )
}

function App() {

  const [nasaData, setNasaData] = useState(null)

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=jUbFwgIEb3r57xPtKB0pD9EKbukgWhNodtPNnEb2")
      .then(res => {
        console.log(res.data)
        setNasaData(res.data)
        //ayeee

      })
      .catch(err => (
        console.log('error')
      ))
  }, [])

  return (
    <div className="App">
      {
        nasaData && <Header  />
      }

      {nasaData && <MainContent2 url={nasaData.url} />}


      {nasaData && <Footer title={nasaData.title} copyright={nasaData.copyright} date={nasaData.date} exp={nasaData.explanation} />}



    </div>



  );
}

export default App;
