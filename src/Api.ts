import axios from "axios";

export default class Api {
  public static async apiGetCall(url: string) {
    try {
      const result = await axios.get(url);
      return result;
    } catch (error) {
      console.log("there is an error");
    }
  }

  
}
