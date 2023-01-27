import React, { useEffect, useState } from "react";
import axios from 'axios';
// import TextFieldOne from './textBoxOne';
// import TextFieldTwo from './textBoxTwo';

const Finder = () => {
  const [Data, setData] = useState({
    
    
    

  })

  
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(value);
    
  }

  



useEffect(() => {
  

  axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${value}&lon=${value}&appid=9cd8d470903604ff83b3e6cb10572158`)
  .then(res => {
      console.log('Response from main API: ', res)
      console.log('finder Data: ', res.data)
      let finderData = res.data;
      setData({ name: finderData.name, 
        feels_like: finderData.main.feels_like,
        name: finderData.main.name, 
        speed: finderData.wind.speed, 
        deg: finderData.wind.deg, 
        descriptor: finderData.weather.main, 
        temp_min: finderData.main.temp_min, 
        temp_max: finderData.main.temp_max,
        
        country: finderData.sys.country,
        visibility: finderData.sys.visibility,
        
        


        

       })


    })
    .catch(err => {
      console.log(err);
      

    })
}, )

  return (

    <div>

      


      <div>
      <p style={{ color: 'red', fontSize: '20px', fontFamily: 'monospace' }}>Temperature Feels Like: {Data.feels_like-200}</p>
      </div>

      <div>
      <p style={{ color: 'red', fontSize: '20px', fontFamily: 'monospace' }}>Maximum Temperature Today: {Data.temp_max-200}</p>
      </div>


      <div>
      <p style={{ color: 'red', fontSize: '20px', fontFamily: 'monospace' }}>Minimum Temperature Today: {Data.temp_min-200}</p>
      </div>


      <div>
      <p style={{ color: 'red', fontSize: '20px', fontFamily: 'monospace' }}>Wind Speed: {Data.speed}</p>
      </div>



      <div>
      <p style={{ color: 'red', fontSize: '20px', fontFamily: 'monospace' }}>Wind Direction: {Data.deg}</p>
      </div>

      <div>
      <p style={{ color: 'red', fontSize: '20px', fontFamily: 'monospace' }}>Country of Station: {Data.country}</p>
      </div>

      <div>
      <p style={{ color: 'blue', fontSize: '20px', fontFamily: 'cursive' }}>New Feature: Enter Longitude and Latitude!</p>
    </div>

    




    <div style={{ display: 'flex' }}>
      <p style={{ fontSize: '40px', fontWeight: 'bold' }}>Latitude & Longitude:</p>
      {/* <TextFieldOne /> */}
    </div>




   





  
  
    <div>
      <input type="text" valueOne={value} onChange={handleChange} />
      
    </div>
    
      



    </div>
  
)};


export default Finder;