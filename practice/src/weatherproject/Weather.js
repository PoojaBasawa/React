import React from 'react'
import './weather.css'
import axios from 'axios'

const API_KEY="DtRRrSJA1EpkoxTGEhrB2Aag9JYcRHvX"
function Weather() {
  const[city,setCity]=useState('')
  const[weather,setweatherData]=useState(null)
  const[error,setError]=useState(null)
  const handleLocation=async ()=>{
    try{
      // Get user's current position using Gelocation API
      navigator.geolocation.getCurrentPosition(async(position)=>{
        const{latitude, longitude} =position.coords;
        const response=await axios.get(`https://api.tomorrow.io/v4/weather/realtime?location=${latitute},$(longitude)&apikey=${API_KEY}`
        );
        console.log(response.data)
        setWetherData(response.data);
      });
    }catch(error){
      setError('true')
    }
    };
    const handleLocation=async ()=>{

    }
  return (
    <>
      <div className='container'> 
      <h1 className='title'>Search Weather Condition</h1>
      <div className='inputContainer'>
        <input type='text' placeholder='Enter City Name' className='input' value={city} onChange={(e)=>setCity(e.target.value)}></input>
        <button className='button' onClick={handleLocation}>Search</button>
      </div>
      </div>
    </>
  )
}
{error&&<p>{error}</p>}

export default Weather