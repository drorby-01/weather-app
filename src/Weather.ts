import Api from "./Api";
import { IWheater } from "./redux/CountryWeather.action";

const DEFAULTKEY = "215854" //tel aviv key

export async function getWather(cityName:string):Promise<IWheater> {

    async function getLocationKey(){
     if (cityName) {
         const {data}:any = await Api.apiGetCall(
           `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=ocrDdRGpBaGDnjg0FzOSnKAgBU9LGd08&q=${cityName}`
         );
         if(Array.isArray(data) && data.length !== 0 ){
             console.log(data[0].Key)
           return data[0].Key //get the key from the location api     
         }else return DEFAULTKEY;
       }
    }
     const locationKey:string = await getLocationKey()
     const city:string = locationKey === DEFAULTKEY ? "tel aviv": cityName;
     try{
      const {data}:any = await Api.apiGetCall(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=ocrDdRGpBaGDnjg0FzOSnKAgBU9LGd08`)
      const tempatureValue:string = data[0].Temperature.Metric.Value;
     const tempatureUnit:string = data[0].Temperature.Metric.Unit; 
     return {city,tempatureValue,tempatureUnit,locationKey}
     }
     catch(error){
      return{city:"",tempatureValue:"",tempatureUnit:"",locationKey:""}
     }
     
     
}


export async function getFiveDayWeather(cityKey:string =DEFAULTKEY): Promise<string[]> {// i will get it from redux
  
const {data}:any = await Api.apiGetCall(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=ocrDdRGpBaGDnjg0FzOSnKAgBU9LGd08&metric=true`);
const {DailyForecasts}  = data ;
const getTempatureForFiveDays = DailyForecasts.map((element:any,index:number) => `${element.Temperature.Minimum.Value} ${element.Temperature.Minimum.Unit} - ${element.Temperature.Maximum.Value} ${element.Temperature.Maximum.Unit} ` )
return getTempatureForFiveDays;
}