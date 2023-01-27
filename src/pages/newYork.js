import React, { useEffect, useState } from "react";
import axios from 'axios';
const NewYork = () => {
  const [Data, setData] = useState({
    

  })




useEffect(() => {
  

 // https://api.openweathermap.org/data/2.5/weather?lat=63&lon=64&appid=9cd8d470903604ff83b3e6cb10572158
  axios.get('https://api.openweathermap.org/data/2.5/weather?lat=41&lon=74&appid=9cd8d470903604ff83b3e6cb10572158')
  .then(res => {
      console.log('Response from main API: ', res)
      console.log('newYork Data: ', res.data)
      let newYorkData = res.data;
      setData({ name: newYorkData.name, 
        feels_like: newYorkData.main.feels_like,
        
        speed: newYorkData.wind.speed, 
        deg: newYorkData.wind.deg, 
        descriptor: newYorkData.weather.main, 
        temp_min: newYorkData.main.temp_min, 
        temp_max: newYorkData.main.temp_max,

        
        country: newYorkData.sys.country,
        visibility: newYorkData.sys.visibility,
        
       })
    })
    .catch(err => {
      console.log(err);
    })
}, [])

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



      
      

    </div>
  );
};

export default NewYork;