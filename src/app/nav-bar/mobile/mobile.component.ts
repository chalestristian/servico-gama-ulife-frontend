import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit { 

  constructor(
    private router: Router) { }
 
  isMobileLayout: boolean = false;
  ngOnInit(): void {
    window.onresize = () => this.isMobileLayout = window.innerWidth <= 991;
  }
  menu : string = "home";

  Rota(rota: string){
    this.router.navigate([rota])
  }
}
