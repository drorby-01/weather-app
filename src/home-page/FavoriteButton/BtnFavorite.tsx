import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IWheater } from "../../redux/CountryWeather/CountryWeather.action";
import { addToFavorites } from "../../redux/FsvoritesWeather/Favorites.action";
import "./BtnFavorite.css";
const BtnFavorite = () => {
  const weather: IWheater = useSelector((state: any) => state.weatherReducer);

  const dispatch = useDispatch();

  const addFavorites = () => {
    dispatch(addToFavorites(weather));
  };

  return (
    <div>
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
