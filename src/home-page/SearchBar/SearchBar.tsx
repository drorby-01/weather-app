import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

import {
  IWheater,
  setCountryWeather,
} from "../../redux/CountryWeather/CountryWeather.action";

import { Weather } from "../../Weather";
import "./SearchBar.css";

const SearchBar = () => {
  const [state, setState] = useState({ city: "", error: "" }); //get input

  const dispatch = useDispatch();

  const getCityWeather = async () => {

    const weather: IWheater = await Weather.getWather(state.city);
    dispatch(setCountryWeather(weather));
  };

  const checkInput = (e: any) => {
    if (e.target.value.match(/^[a-zA-Z]+$|\s/) || e.target.value === "") {
      return setState({ city: e.target.value, error: "" });
    } else return setState({ city: "", error: "is-invalid" });
  };
  //is-invalid
  return (
    <>
      <label htmlFor="validationServer03" className="m-1">City</label>
      <input
        type="text"
        className={`form-control m-1 ${state.error} w-auto`}
        id="validationServer03"
        value={state.city}
        aria-describedby="validationServer03Feedback"
        onChange={checkInput}
        required
      />
      <div id="validationServer03Feedback" className="invalid-feedback">
        you must enter english letter only
      </div>
      <Button onClick={getCityWeather} className="m-1">
        Search
      </Button>
    </>
  );
};

export default SearchBar;
