import {axioService} from "./axio.service";
import baseURL, {urls} from "../constans/urls";


export const moviesService ={
    getAll: (page)=>axioService.get(`${urls.movies}&page=${page}` ).then(value => value.data),
    getById:(id)=>axioService.get(`${baseURL}/movie/${id}?api_key=8606d3bcebacc307fd3773f3fb19be89`).then(value => value.data)
}
//https://api.themoviedb.org/3/movie/634649?api_key=8606d3bcebacc307fd3773f3fb19be89