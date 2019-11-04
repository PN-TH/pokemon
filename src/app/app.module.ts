import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokedexPageComponent } from './Pages/pokedex-page/pokedex-page.component';
import { PokemonListComponent } from './Components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './Components/pokemon-detail/pokemon-detail.component';
import { CreatePokemonComponent } from './Components/create-pokemon/create-pokemon.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PokedexPageComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    CreatePokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
