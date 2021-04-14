import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IWheater } from "../../redux/CountryWeather.action";
import { getFiveDayWeather } from "../../Weather";
import "./FiveDayWeather.css";
const FiveDayWeather = () => {
  const weather: IWheater = useSelector((state: any) => state.weatherReducer);
  const [weatherTempatures, setweatherTemaptures] = useState<Array<string>>([]);

  useEffect(() => {
    async function weatherApi() {
      const weatherArray: Array<string> = await getFiveDayWeather(
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
    <h1>The Weather For The Five Day</h1>
    <div className="fiveDay">
      {weatherTempatures.map((element: string, index) => (
        <div className="card " style={{width:"auto",padding:"20px"}}>
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
