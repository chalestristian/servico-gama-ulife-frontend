import { Component, Input, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  @Input()
  menu: string | undefined;

  ngVersion: string = VERSION.full;
  matVersion: string = '5.1.0';
  breakpoint: number = 0;
  cols : number = 0;
  isMobileLayout: boolean = false;
  selected: string = "Home";
  constructor() { }

  ngOnInit() {
    this.changeMenu(); 
  }  
  changeMenu(){
    window.onresize = () => this.isMobileLayout = window.innerWidth <= 990;
  }
}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}