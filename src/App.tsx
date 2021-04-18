import React, { useEffect }   from "react";
import logo from "./logo.svg";
import "./App.css";
import AppNav from "./nav-bar/AppNav";
import AppRoutes from "./app-routes/AppRoutes";
import { useDispatch, useSelector } from "react-redux";
import { Weather } from "./Weather";
import { setCountryWeather } from "./redux/CountryWeather/CountryWeather.action";

function App() {
  const background: string = useSelector(
    (state: any) => state.ThemeBackgroundColor.background
  );

  const dispatch = useDispatch();
  
  const city = useSelector((state:any)=>state.weatherReducer.city)

  useEffect(() => {

    Weather.getWather(city).then((data)=>{
      dispatch(setCountryWeather(data));   
    })

    Weather.getDefaultWather().then((data) => {
      dispatch(setCountryWeather(data));
    });
    
  }, []);
  
  
  return (
    <div className="fullScreen" style={{backgroundColor:background}}>
      <nav>
        <AppNav />
      </nav>
      <main   >
        <AppRoutes />
      </main>
      </div>
  );
}

export default App;
