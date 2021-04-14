import { ACTIONS } from "../Actions";
import { IAction } from "../CountryWeather.reducer";

const initalState = {
  background: "white",
};

export const ThemeBackground = (state:{background:string} = initalState, action: IAction) => {
  const copyState = {...state};
  switch (action.type) {
    case ACTIONS.THEME_BACKGROUND:{
      return state.background === "white" ? {background:"black"}:{background:"white"}
      
    }
     
  }
  return copyState
};
