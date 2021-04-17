import React, { useState } from "react";
import {  Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { IWheater, setCountryWeather } from "../../redux/CountryWeather/CountryWeather.action";
import { Weather } from "../../Weather";
import ModalError from "../Alert/Alert";


const SearchBar = () => {
  const [state, setState] = useState({city:"",error:false}); //get input

  const dispatch = useDispatch();

  const getCityWeather = async () => {
    const weather: IWheater = await Weather.getWather(state.city);
    dispatch(setCountryWeather(weather));
  };

  const checkInput=(e:any)=>{
  if(e.target.value.match(/[a-zA-Z]+$/)){
    setState({city:e.target.value,error:false})
  }
  else setState({city:"",error:true})
  }


  return (
    <>
      <input
        type="text"
        className="form-control w-auto d-inline m-1"
        value={state.city}
        onChange={checkInput}
      />
      {state.error && <ModalError show={state.error} onHide={()=>setState({...state,error:false})}/> }
      <Button onClick={getCityWeather} className="m-1">
        Search
      </Button>
    </>
  );
};

export default SearchBar;
