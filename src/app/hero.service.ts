import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Hero } from 'app/hero';
import { HEROES } from 'app/mock-heroes';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return Observable.of(HEROES);
  }

  getHeroesSlowly(): Observable<Hero[]> {
    return Observable.of(HEROES).delay(3000);
  }

  getHero(id: number): Observable<Hero> {
    let hero = null;
    this.getHeroes()
      .subscribe(
      (heroes) => hero = heroes.find(h => h.id === id),
      (error) => console.log(error)
      );
    return Observable.of(hero);
  }

}
