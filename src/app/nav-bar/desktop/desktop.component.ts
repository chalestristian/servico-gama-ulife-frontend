import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import menu from 'src/app/models/menu';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css']
})
export class DesktopComponent implements OnInit {

  constructor(
    private router: Router) { }

  isMobileLayout: boolean = false;
  ngOnInit(): void {
    window.onresize = () => this.isMobileLayout = window.innerWidth <= 991;
  }

  @Input()
  selected: string | undefined;

  nav: Array<menu> =
    [
      { display: "Home", route: "aluno" },
      { display: "Provas", route: "aluno/Provas" },
      { display: "Notas", route: "aluno/Notas" },
      { display: "Sair", route: "" },
    ];

  Rota(rota: string) {
    this.router.navigate([rota])
  }
}
