import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMON } from './pokemon-mock';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemons = POKEMON;

  public getPokemons(): Pokemon[] {
    return this.pokemons;
  }

  constructor() { }
}
