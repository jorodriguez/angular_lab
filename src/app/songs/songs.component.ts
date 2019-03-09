import { Component, OnInit } from '@angular/core';Response
import { SongService } from './song.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  //instanciar variables
  public songs:Array<any> = null;

  public song:string = null;

  constructor(private songService:SongService) { }

  ngOnInit() {
    this.songs = this.songService.getSongs();    
  } 

   getSongs(){
     this.songService.searchSong(this.song).then(
       response=>{
          this.songs = response;
       });
   }

}
