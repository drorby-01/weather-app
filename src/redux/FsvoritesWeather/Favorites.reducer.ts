import { ACTIONS } from "../Actions";
import { IWheater } from "../CountryWeather/CountryWeather.action";
import { IAction } from "../CountryWeather/CountryWeather.reducer";


const initialState: IFavorites = {
  favorites: [],
};

interface IFavorites {
  favorites: Array<IWheater>;
}

export const FavoriteReducer = (
  state: IFavorites = initialState,
  action: IAction
) => {
  const copyState = { ...state };

  switch (action.type) {
    case ACTIONS.FAVORITES_COUNTRIES: {
      const { payload } = action;
      const weather:IWheater|undefined = copyState.favorites.find(((element:IWheater)=> element.locationKey === payload.locationKey))
      if(!weather)//if it undifiend we need to insert to the array 
      copyState.favorites.push(payload)
      return copyState;
    }
  }
  return copyState;
};
