import Api from "./Api";
import { IWheater } from "./redux/CountryWeather/CountryWeather.action";

export class Weather {
  private static DEFAULTKEY: string; //tel aviv get location key
  private static DEFAULTCITY: string;
  private static readonly APIKEY:string = "nxAc4Cec4yFqDi4mcFuvdWnAGV0wnTQg" 
  
  private static async getLocationKey(cityName: string) {
    if (cityName) {
      const { data }: any = await Api.apiGetCall(
        `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${this.APIKEY}&q=${cityName}`
      );
      if (Array.isArray(data) && data.length !== 0) {
        return data[0].Key; //get the key from the location api
      } else {
        await this.setDefault();
        return Weather.DEFAULTKEY; // if there is an error i will return tel aviv ot my location key
      }
    }
  }

  static async getWather(cityName: string): Promise<IWheater> {
    let locationKey: string;

    locationKey = await this.getLocationKey(cityName.toLowerCase()); //give me the location key
    console.log(locationKey);
    if (locationKey === this.DEFAULTKEY) cityName = this.DEFAULTCITY; // if i dont find my location from the search box it will give me the default key so i return the default city
    try {
      const { data }: any = await Api.apiGetCall(
        `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${this.APIKEY}`
      );
      const tempatureValue: string = data[0].Temperature.Metric.Value;
      const tempatureUnit: string = data[0].Temperature.Metric.Unit;
      return { city: cityName, tempatureValue, tempatureUnit, locationKey };
    } catch (error) {
      return {
        city: "",
        tempatureValue: "",
        tempatureUnit: "",
        locationKey: "",
      };
    }
  }

  static async getFiveDayWeather(
    cityKey: string = this.DEFAULTKEY
  ): Promise<string[]> {
    const { data }: any = await Api.apiGetCall(
      `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${this.APIKEY}&metric=true`
    );

    const { DailyForecasts } = data;
    const getTempatureForFiveDays = DailyForecasts.map(
      (element: any, index: number) =>
        `${element.Temperature.Minimum.Value} ${element.Temperature.Minimum.Unit} - ${element.Temperature.Maximum.Value} ${element.Temperature.Maximum.Unit} `
    );
    return getTempatureForFiveDays;
  }

  public static async setDefault(): Promise<any> {
    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(
        async (res) => {
          const latitude: number = res.coords.latitude;
          const longitude: number = res.coords.longitude;
          try {
            const { data }: any = await Api.apiGetCall(
              `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${this.APIKEY}&q=${latitude},${longitude}`
            );
            resolve({ key: data.Key, city: data.LocalizedName });
          } catch (e) {
            console.log(e.message);
          }
        },
        async (error) => {
          resolve({
            key: await this.getLocationKey("tel aviv"),
            city: "tel aviv",
          });
        }
      );
    });
  }

  public static async getDefaultWather() {
    const result = await this.setDefault();
    this.DEFAULTKEY = result.key;
    this.DEFAULTCITY = result.city;
    return await this.getWather(Weather.DEFAULTCITY);
  }
}
