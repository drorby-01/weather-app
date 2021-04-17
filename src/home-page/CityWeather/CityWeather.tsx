import React, { useState }  from "react";
import { Spinner } from "react-bootstrap";
import {  useSelector } from "react-redux";
import { IWheater, } from "../../redux/CountryWeather/CountryWeather.action";
import "./CityWeather.css"
const CityWeather = () => {
  
  const cityWeather: IWheater = useSelector(
    (state: any) => state.weatherReducer
  ); 
  
  const loader = useSelector((state: any) => state.LoaderReducer.loader);

  if(loader) return <div className="layout-loader"> <Spinner animation={"border"} style={{height:"100px",width:"100px"}}  /> </div>
  return (
    <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <h1 className="cityName" style={{color:"gold"}}>{cityWeather.city} </h1>
        <h2 className="cityTempature" style={{color:"gold"}}>   Tempature: {cityWeather.tempatureValue} {cityWeather.tempatureUnit} </h2>
    </div>
    
  );
};

export default CityWeather;
