import { Component, OnInit, OnDestroy } from '@angular/core';

import { AlbumService} from './album.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription }  from 'rxjs';

type Album = {
  album:{
    artist: {name:string,url:string},
    image: Array<any>,
    name: string,
    url:string
  }  
}

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit,OnDestroy {

  private subscription:Subscription = null;
  private artistName:string;
  public albums:Array<Album> = null;

  constructor(private route:ActivatedRoute,private albumService:AlbumService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params=>{
          const {artist} = params;
          this.artistName  = artist;
          this.getAlbums(artist);
      });
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
  getAlbums(artist){
    this.albumService
        .getAlbums(artist)
        .then((response:Array<Album>) =>{
          console.log("Reponse album ",response['album']);
          this.albums = response['album'];
      });    
  }   

}
