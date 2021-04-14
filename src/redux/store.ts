import {createStore,combineReducers} from "redux"
import { weatherReducer } from "./CountryWeather.reducer"
import { FavoriteReducer } from "./FsvoritesWeather/Favorites.reducer"
import { ThemeBackground } from "./Theme/Theme.reducer"



const store = createStore(combineReducers({weatherReducer,ThemeBackgroundColor:ThemeBackground,FavoriteReducer:FavoriteReducer}))

export default store