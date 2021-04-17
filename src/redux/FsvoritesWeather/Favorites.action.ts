import { ACTIONS } from "../Actions";
import { IWheater } from "../CountryWeather/CountryWeather.action";

export const addToFavorites=(country:IWheater)=>{
            return {
                type: ACTIONS.FAVORITES_COUNTRIES,
                payload:country
            }
}
