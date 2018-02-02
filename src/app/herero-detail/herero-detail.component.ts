import { Component, OnInit,Input } from '@angular/core';
import { Hero } from '../hero';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-herero-detail',
  templateUrl: './herero-detail.component.html',
  styleUrls: ['./herero-detail.component.css']
})
export class HereroDetailComponent implements OnInit {

  @Input() hero:Hero;

  constructor(private activatedRoute:ActivatedRoute,private location:Location,private heroService:HeroService) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(){
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(
      hero => this.hero = hero
    );
  }

  goBack(){
    this.location.back();
  }

}
