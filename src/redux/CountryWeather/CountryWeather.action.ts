import { ACTIONS } from "../Actions";
import { setLoader } from "../Loader/loader.action";

export interface IWheater {
  city: string;
  tempatureValue: string;
  tempatureUnit: string;
  locationKey: string;
}

export const setCountryWeather = (cityWeather: IWheater) => {
  return (dispatch: any) => {
    dispatch({
      type: ACTIONS.COUNTRY_WEATHER,
      payload: cityWeather,
    });
    dispatch(setLoader());
    
  };

  
};
