import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Gif } from '../models/Gif';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  api_key = 'deokzgUjxm6QHQdp3H3aca1LSZcCpucc';
  limit = 8;
 
 constructor(private http:HttpClient) { }

  searchGifs(searchparam){
    return this.http.get<Gif>(`https://api.giphy.com/v1/gifs/search?q=${searchparam}&api_key=${this.api_key}&limit=${this.limit}`);
  }
}
