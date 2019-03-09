import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  public songs:Array<object> = null;
  private API_KEY = environment.API_KEY;
  private URL_API = environment.API_URL;

  constructor(private http:HttpClient) { }

  searchSong(song){
    const API_URL = `${this.URL_API}method=track.search&track=${song}&api_key=${this.API_KEY}&format=json`;
   
    return this.http.get(API_URL)
          .pipe(
              map(response => response['results'].trackmatches.track)
          ).toPromise();
  }

  getSongs(){
    return this.songs = [{
        artist:'Queen',
        name:'Radio Ga Ga',
        url:'https://www.last.fm/music/Queen+RADIO+GAGA',
        image:[]
      }];   
  }
}
