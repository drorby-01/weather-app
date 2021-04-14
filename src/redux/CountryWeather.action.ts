import { ACTIONS } from "./Actions"


export interface IWheater{
    city:string,
    tempatureValue:string,
    tempatureUnit:string,
    locationKey:string
}


export const setCountryWeather=(cityWeather:IWheater)=>{
    return {
        type:ACTIONS.COUNTRY_WEATHER,
        payload:cityWeather
    }
}

