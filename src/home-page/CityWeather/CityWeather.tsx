import React  from "react";
import {  useSelector } from "react-redux";
import { IWheater, } from "../../redux/CountryWeather.action";
import "./CityWeather.css"
const CityWeather = () => {
  
  const cityWeather: IWheater = useSelector(
    (state: any) => state.weatherReducer
  ); 
  

  return (
    <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <h1 className="cityName" style={{color:"gold"}}>{cityWeather.city} </h1>
        <h2 className="cityTempature" style={{color:"gold"}}>   Tempature: {cityWeather.tempatureValue} {cityWeather.tempatureUnit} </h2>
    </div>
    
  );
};

export default CityWeather;
