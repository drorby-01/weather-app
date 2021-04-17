
import { ACTIONS } from "../Actions";
import {  IWheater } from "./CountryWeather.action"

const initalState = {
    locationKey:"215854",
    city:"",
    tempatureValue:"",
    tempatureUnit:"C°"
}

export interface IAction { 
    type:string,
    payload:IWheater
}

export const weatherReducer = (state:IWheater=initalState , action:IAction )=>{

    const copyState = {...state};

    switch(action.type){
        case ACTIONS.COUNTRY_WEATHER : { return action.payload;}
    }
    return copyState;
}