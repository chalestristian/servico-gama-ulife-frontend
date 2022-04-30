import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor() { }

  currentTime: any;
  ngOnInit(): void {
    this.currentTime = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
    setInterval(() => {
      this.currentTime = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }); 
    }, 1000);
  }

}
