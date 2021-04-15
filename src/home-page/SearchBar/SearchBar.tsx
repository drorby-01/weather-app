import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Api from "../../Api";
import { IWheater, setCountryWeather } from "../../redux/CountryWeather.action";
import { getWather } from "../../Weather";

const SearchBar = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState("");

  const getCityWeather = async () => {
    const weather: IWheater = await getWather(state);
    console.log(weather);
    dispatch(setCountryWeather(weather));
  };

  return (
    <>
      <input
        type="text"
        className="form-control col-lg-2 col-xl-3 col-md-4 col-sm-6 col-7 d-inline m-1"
        value={state}
        onChange={({ target }) => setState(target.value)}
      />
      <Button onClick={getCityWeather} className="m-1">
        Search
      </Button>
    </>
  );
};

export default SearchBar;