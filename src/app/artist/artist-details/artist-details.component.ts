import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription }  from 'rxjs';
import { ArtistService } from './../../artists/artist.service';

type Artist = {
  image:Array<object>,    
  name: string,  
  url:string,
  bio:object
}

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent implements OnInit,OnDestroy {

  public artist:Artist;
  public artistName:string = null;
  public subscription:Subscription;

  constructor(private route:ActivatedRoute,private artistService:ArtistService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params=>{
      
      const { artist } = params;

      this.artistName = params.artist;

      this.getArtist(this.artistName);
    });

  }


  getArtist(artist){
    
    this.artistService.getDetails(artist)

     .then((response:Artist) =>{
      
      console.log("Response ",response);
          
      this.artist = response['artist'];
    });
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
