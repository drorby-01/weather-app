import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { IWheater } from "../../redux/CountryWeather/CountryWeather.action";
import { Weather } from "../../Weather";
import FiveLoader from "../FiveLoader/FiveLoader";
import "./FiveDayWeather.css";
const FiveDayWeather = () => {
  const weather: IWheater = useSelector((state: any) => state.weatherReducer);
  const [weatherTempatures, setweatherTemaptures] = useState<Array<string>>([]);
  const backgroundColor = useSelector(
    (state: any) => state.ThemeBackgroundColor.background
  );

  useEffect(() => {
    async function weatherApi() {
      const weatherArray: Array<string> = await Weather.getFiveDayWeather(
        weather.locationKey
      );
      setweatherTemaptures(weatherArray);
    }
    weatherApi();
  }, []);

  const getDay = (index: number) => {
    return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
      new Date().setDate(new Date().getDate() + index)
    );
  };

  

  return (
    <>
      <h1 style={{ color: "gold" }}>The Weather For The Five Day</h1>
       {weatherTempatures.length === 0 && <FiveLoader/> }  
      <div className="fiveDay" style={{ backgroundColor }}>
        {weatherTempatures.map((element: string, index) => (
          <div
            key={`weather${index}`}
            className="card"
            style={{ padding: "20px",minWidth:"auto" }}
          >
            <p className="card-text"> Day : {getDay(index)}</p>
            <p className="card-text">City:{weather.city}</p>
            <p className="card-text">Tempature:{element}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default FiveDayWeather;
