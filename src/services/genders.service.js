import {axioService} from "./axio.service";
import {urls} from "../constans/urls";


export const gendersService = {
    getAll:()=>axioService.get(urls.genders).then(value => value.data),
    getById:(id,page)=>axioService.get(`https://api.themoviedb.org/3/discover/movie?api_key=9d0492a7c445cae0ed65774bb928dc58&with_genres=${id}&page=${page}`).then(value => value.data)
}