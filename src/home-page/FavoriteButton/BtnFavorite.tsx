import React from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { IWheater } from "../../redux/CountryWeather.action";
import { addToFavorites } from "../../redux/FsvoritesWeather/Favorites.action";
import "./BtnFavorite.css";
const BtnFavorite = () => {
  const weather: IWheater = useSelector((state: any) => state.weatherReducer);

  const dispatch = useDispatch();

  const addFavorites = () => {
    dispatch(addToFavorites(weather));
  };

  return (
    <div className="ml-auto">
      <button
        type="button"
        className="btn btn-danger m-1"
        onClick={addFavorites}
      >
        Love
      </button>
    </div>
  );
};

export default BtnFavorite;
