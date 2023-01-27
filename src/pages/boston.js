import React, { useEffect, useState } from "react";
import axios from 'axios';
const Boston = () => {
  const [Data, setData] = useState({
    

  })



useEffect(() => {
  

  axios.get('https://api.openweathermap.org/data/2.5/weather?lat=42&lon=71&appid=9cd8d470903604ff83b3e6cb10572158')
  .then(res => {
      console.log('Response from main API: ', res)
      console.log('boston Data: ', res.data)
      let bostonData = res.data;
      setData({ name: bostonData.name, 
        feels_like: bostonData.main.feels_like,
        name: bostonData.main.name, 
        speed: bostonData.wind.speed, 
        deg: bostonData.wind.deg, 
        descriptor: bostonData.weather.main, 
        temp_min: bostonData.main.temp_min, 
        temp_max: bostonData.main.temp_max,
        
        country: bostonData.sys.country,
        visibility: bostonData.sys.visibility,
        advancedTechniques: bostonData.advancedTechniques,


        

       })


    })
    .catch(err => {
      console.log(err);
      

    })
}, [])

  return (

    <div className="boston" style={{ backgroundImage: 'url(${process.env.PUBLIC_URL+ "/BostonWeather.png"})' }}>


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


export default Boston;