import { ACTIONS } from "../Actions"
import { IAction } from "../CountryWeather/CountryWeather.reducer"

const initialState = { 
    loader:true
}


export const LoaderReducer = (state=initialState,action:IAction)=>{
    
    const copyState = {...state};

    switch(action.type){
        case ACTIONS.CHANGE_LOADER: {copyState.loader=!copyState.loader; return copyState }
        default: return copyState
    }
}

