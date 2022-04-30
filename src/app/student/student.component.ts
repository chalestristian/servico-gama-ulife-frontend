import { Component, Input, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input()
  menu: string | undefined;
  isMobileLayout: boolean = false;
  selected: string = "Home";
  constructor() { }

  ngOnInit() {
    this.changeMenu();
  }
  changeMenu() {
    window.onresize = () => this.isMobileLayout = window.innerWidth <= 990;
  }

}
