import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  public songs:Array<object> = null;

  constructor() { }


  getSongs(){
    return this.songs = [{
        artist:'Queen',
        name:'Radio Ga Ga',
        url:'https://www.last.fm/music/Queen+RADIO+GAGA'
      }];   
  }
}
