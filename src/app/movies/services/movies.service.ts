import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private readonly baseUrl:string = environment.baseUrl;
  private http = inject(HttpClient);

  constructor() { }

  register(name:string,email:string,password:string){
    const url = `${this.baseUrl}/api/register`;
    const body = {name,email,password}

    return this.http.post(url,body).pipe(map( ()=>true ))
  }

  newMovie(name:string,genre:string,year:string){

    const url = `${this.baseUrl}/api/movies`;
    const body = {name,genre,year};

    return this.http.post(url,body).pipe(map( ()=>true ))
  }

}
