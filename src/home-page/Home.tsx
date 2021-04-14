import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setCountryWeather } from "../redux/CountryWeather.action";
import { getWather } from "../Weather";
import BackgroundTheme from "./BackgroundTheme/BackgroundTheme";
import CityWeather from "./CityWeather/CityWeather";
import BtnFavorite from "./FavoriteButton/BtnFavorite";
import FiveDayWeather from "./fiveDayWeather/FiveDayWeather";
import "./Home.css";
import SearchBar from "./SearchBar/SearchBar";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getWather("tel aviv").then((data) => {
      console.log(data);
      dispatch(setCountryWeather(data));
    });
  }, []);


  return (
    <div className="home">
      <header className="row m-1">
         
        <SearchBar />
        <BackgroundTheme/>
        <BtnFavorite/>
      </header>
      <aside className="col-lg-3 col-md-7 col-xl-3 col-sm-7 col-10 p-0">
        <CityWeather />
      </aside>
      <footer>
        <FiveDayWeather />
      </footer>
    </div>
  );
};

export default Home;
