import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setCountryWeather } from "../redux/CountryWeather/CountryWeather.action";
import { Weather } from "../Weather";
import BackgroundTheme from "./BackgroundTheme/BackgroundTheme";
import CityWeather from "./CityWeather/CityWeather";
import BtnFavorite from "./FavoriteButton/BtnFavorite";
import FiveDayWeather from "./fiveDayWeather/FiveDayWeather";
import "./Home.css";
import SearchBar from "./SearchBar/SearchBar";

const Home = () => {
  const dispatch = useDispatch();
  
  const city = useSelector((state:any)=>state.weatherReducer.city)

  console.log(city)
  

  return (
    <div className="home">
      <header className="row m-1">
        <SearchBar />
        <BackgroundTheme />
        <BtnFavorite />
      </header>
      <aside>
        <CityWeather />
      </aside>
      <footer>
        <FiveDayWeather />
      </footer>
    </div>
  );
};

export default Home;
