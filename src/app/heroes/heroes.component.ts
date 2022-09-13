import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import {HeroService} from '../hero.service'
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  
})
export class HeroesComponent implements OnInit {

  //
  constructor(private heroService: HeroService, private messageService:MessageService) { }

  //Use without hero.service
  //heroes = HEROES;
  
  //Used with hero.service
  heroes: Hero[] = [];
  selectedHero?: Hero;


  //Place Initialization of component here!
  ngOnInit(): void {
    this.getHeroes();
  }

  //Binded method when hero is selected by user
  /*
  onSelect(hero:Hero): void{
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  }
  */

  //
  getHeroes(): void{
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  
  /* Adds a Hero within the database
   * param: string for hero.name
  */
  add(name: string): void{
    name = name.trim();
    if(!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void{
    this.heroes = this.heroes.filter(h => h != hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

}
