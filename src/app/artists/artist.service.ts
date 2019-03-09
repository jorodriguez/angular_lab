import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { TouchSequence } from 'selenium-webdriver';

import { environment } from '../../environments/environment';

type Response = {
  results:{
    artistmatches:{
      artist:Array<Object>
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private API_KEY = environment.API_KEY;
  private API_URL = environment.API_URL;
  
  constructor(private http:HttpClient) { }

  searchArtists(artist){
    
    const SEARCH_URL = `${this.API_URL}method=artist.search&artist=${artist}&api_key=${this.API_KEY}&format=json`;
  
    return this.http.get<Response>(SEARCH_URL)
            .pipe(
              map(response => {
                console.log("Response ",response);
                return response['results'].artistmatches.artist;
              })
            ).toPromise();  
  }

  getDetails(artist){
    const API_DETAIL = `${this.API_URL}method=artist.getInfo&artist=${artist}&api_key=${this.API_KEY}&format=json`;

    return this.http.get(API_DETAIL).toPromise();

  }

}
