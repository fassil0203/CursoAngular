import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit{
  name = 'Fabio Santana';
  age :number = 33;
  job = 'Analista'
  Hobbies = ['Correr','Jogar','Estudar'];
  car ={
    name:'Polo',
    year:2022,
  }

  construtor(){}
  ngOnInit(): void {
      
  }
}


