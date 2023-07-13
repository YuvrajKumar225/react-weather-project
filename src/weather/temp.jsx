import React, { useEffect, useState } from 'react'
import WeatherCard from './weatherCard';
import './style.css'
let Temp = () => {
  let[searchValue,setSearchValue]=useState("pune");
  let[tempInfo,setTempInfo]=useState({})
  const getWeatherInfo=async()=>{
    try{
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=ef66ab545778654ad59e46208292f151`;

          let res=await fetch(url);
          let data=await res.json();
          const {temp,humidity,pressure}=data.main;
          const{main:weathermood}=data.weather[0];
          const{name}=data;
          const{speed}=data.wind;
          const{country,sunset}=data.sys;
          // console.log(temp);
          const myWeatherReport={
            temp,
            humidity,
            pressure,
            weathermood,
            name,
            speed,
            country,
            sunset
          }
          setTempInfo(myWeatherReport);
    }
    catch(error){
      console.log(error)
    }
  }
  useEffect(() => {
    getWeatherInfo();
  }, [])
  
  return (
    <>
    <div className="wrap">
        <div className="search">
            <input 
            type="search" 
            placeholder='search'
            autoFocus
            id='search'
            className='seachItem'
            value={searchValue}
            onChange={(e)=>setSearchValue(e.target.value)}
            />
            <button className='searchButton'
            onClick={getWeatherInfo}>Search</button>
        </div>
    </div>
    <WeatherCard tempInfo={tempInfo}/>
    </>
  )
}
export default Temp