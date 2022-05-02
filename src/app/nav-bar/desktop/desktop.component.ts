import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import menu from 'src/app/models/menu';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css']
})
export class DesktopComponent implements OnInit {
 
  //Define qual item foi selecionado no menu.
  @Input()
  selected: string | undefined;
  name: string = "";

  @Input()
  disabled: boolean = true;
 
  //Rotas disponíveis para os alunos.
  student: Array<menu> = [
    { display: "Home", route: "aluno" },
    { display: "Provas", route: "aluno/provas" },
    { display: "Notas", route: "aluno/notas" },
    { display: "Sair", route: "" },
  ];

  //Rotas disponíveis para os professores.
  teacher: Array<menu> = [
    { display: "Home", route: "professor" },
    { display: "Alunos", route: "professor/alunos" }, 
    { display: "Sair", route: "" },
  ]; 
  itens: menu[] | undefined;

  constructor(
    private router: Router,
    private cookieService: CookieService) { }
 
  ngOnInit(): void {
    this.name = this.cookieService.get('name');
    switch (this.cookieService.get('role')) {
      case 'aluno':
        this.itens = [...this.student];
        break;
      case 'professor':
        this.itens = [...this.teacher];
        break; 
      default:
        this.Error("");
        break;
    }
  }
  // Em caso de Erro retorna para Rota padrão.
  Error(rote : string){
    this.cookieService.deleteAll();
    this.Rota(rote);
  }
  
  // Redirecionamento de Rota ao clicar no menu.
  Rota(rote: string) {
    if(!this.disabled){
      this.router.navigate([rote]);
    }
  }
}
