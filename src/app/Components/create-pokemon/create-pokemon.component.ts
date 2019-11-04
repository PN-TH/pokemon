import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../../shared/pokemon';
import { PokemonService } from 'src/app/shared/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.component.html',
  styleUrls: ['./create-pokemon.component.css']
})
export class CreatePokemonComponent implements OnInit {

  pkmn: Pokemon = new Pokemon();

  constructor(private pkmnService: PokemonService,
    private router: Router) { }

  ngOnInit() {
  }
  
  add() {
    this.router.navigate(['/'])
    this.pkmnService.getPokemons().push(this.pkmn)
  }
}
