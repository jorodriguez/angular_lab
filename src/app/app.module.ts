import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SongsComponent } from './songs/songs.component';

import {SongService} from './songs/song.service';

import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';

import { ArtistsComponent } from './artists/artists.component';
import { ArtistService } from './artists/artist.service';
import { ArtistDetailsComponent } from './artist/artist-details/artist-details.component';

import { AlbumsComponent } from './artists/albums/albums.component';
import { AlbumService } from './artists/albums/album.service';
//--Aqui se importan lo necesario para todo el proyecto

@NgModule({
  declarations: [
    AppComponent,
    SongsComponent,
    ArtistsComponent,
    ArtistDetailsComponent,    
    AlbumsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [SongService,ArtistService,AlbumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
