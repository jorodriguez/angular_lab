import {RouterModule,Routes} from '@angular/router';
import { SongsComponent } from './songs/songs.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistDetailsComponent } from './artist/artist-details/artist-details.component';
import { AlbumsComponent } from './artists/albums/albums.component';

const APP_ROUTES: Routes = [
    {path:'',component:ArtistsComponent},
    {path:'artist/:artist',component:ArtistDetailsComponent},
    {path:'songs',component:SongsComponent},
    {path:'artist/:artist/albums',component:AlbumsComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);

