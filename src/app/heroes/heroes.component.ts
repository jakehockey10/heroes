import { Component, OnInit } from '@angular/core';

import { Hero } from 'app/hero';
import { HeroService } from 'app/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    // this.heroeService.getHeroesSlowly()
    this.heroService.getHeroes()
      .subscribe(
      (heroes) => this.heroes = heroes,
      (error) => console.log(error)
      );
  }

}
