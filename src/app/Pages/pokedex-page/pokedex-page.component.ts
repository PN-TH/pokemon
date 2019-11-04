import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../shared/pokemon';
import { PokemonService } from 'src/app/shared/pokemon.service';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.css']
})
export class PokedexPageComponent implements OnInit {
  
  pokemons: Pokemon[]
  pokemonDetail: Pokemon
  pokemonForm: Pokemon

  constructor(private pkmnService: PokemonService) { }

  ngOnInit() {
    this.getPokemons()
  }

  onPokemonSelected(p: Pokemon) {
    this.pokemonDetail = p;
  }

  onPokemonForm(pkmn: Pokemon) {
    this.pokemonForm = new Pokemon;
  }
  
  getPokemons() {
    this.pokemons = this.pkmnService.getPokemons()
  }
}
