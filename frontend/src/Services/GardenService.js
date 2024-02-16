import axios from "axios";
class GardenService{
    getAllItems()
    {
   return axios.get("http://localhost:8080/getall");
   }
}

export default new GardenService();