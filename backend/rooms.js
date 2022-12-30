import axios from "axios";
import { get_all_rooms_url } from "../config/urls";


export const get_all_rooms = async()=>{
    const response = await axios.get(get_all_rooms_url)
    const data = response.data.data
return data

}