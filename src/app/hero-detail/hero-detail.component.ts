import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero } from 'app/hero';

import { HeroService } from 'app/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    // The hero id is a number.  Route parameters are always
    // strings.  So the route parameter value is converted
    // to a number with the JavaScript (+) operator.
    this.route.params
      .switchMap((params: Params) =>
        this.heroService.getHero(+params['id'])).subscribe((hero) => this.hero = hero, (error) => console.log(error));
  }

  goBack(): void {
    this.location.back();
  }

}
