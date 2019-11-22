import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'HerouesComponent',
  templateUrl: './heroues.component.html',
  styleUrls: ['./heroues.component.css']
})
export class HerouesComponent implements OnInit {
  HEROES: Hero[] = [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];
  selectedHero: Hero;
  
  

  constructor() { }

  ngOnInit() {
    if(this.HEROES.length<1){
      console.log("no hay datos")
    }
    else{
      console.log("hay datos");
    }
    this.selectedHero= new Hero;
    
  }
  onSelect(hero:Hero){
    this.selectedHero=hero;
  }

}
