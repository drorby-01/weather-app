import { createStore, combineReducers, applyMiddleware } from "redux";
import { weatherReducer } from "./CountryWeather/CountryWeather.reducer";

import { FavoriteReducer } from "./FsvoritesWeather/Favorites.reducer";
import { ThemeBackground } from "./Theme/Theme.reducer";
import thunk from "redux-thunk";
import { LoaderReducer } from "./Loader/loader.reducer";

const store = createStore(
  combineReducers({
    weatherReducer: weatherReducer,
    ThemeBackgroundColor: ThemeBackground,
    FavoriteReducer: FavoriteReducer,
    LoaderReducer: LoaderReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
