import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/esm/Card";
import { useDispatch, useSelector } from "react-redux";
import { IWheater, setCountryWeather } from "../../redux/CountryWeather.action";
import { getWather } from "../../Weather";

const CityWeather = () => {
  const cityWeather: IWheater = useSelector(
    (state: any) => state.weatherReducer
  );

  return (
    <aside>
      <Card>
        <Card.Body>City: {cityWeather.city} </Card.Body>
        <Card.Body>Tempature: {cityWeather.tempatureValue} {cityWeather.tempatureUnit} </Card.Body>
      </Card>
    </aside>
  );
};

export default CityWeather;
