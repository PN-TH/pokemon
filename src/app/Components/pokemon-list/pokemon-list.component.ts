import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Pokemon } from '../../shared/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  
  @Output() pkmnEvent = new EventEmitter<Pokemon>()
  @Input() pokemons: Pokemon[]

  pokemon: Pokemon

  constructor() { }

  ngOnInit() {
  }

  catchPokemon(p: Pokemon) {
    this.pokemon = p;
    this.pkmnEvent.emit(p);
  }
}
