import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from '../services/http/http-client.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {

  sort: boolean = false;
  lista: any = [];
  listBackup: any = [];
  filterField: string = "";
  selected: string = "Provas";
  orderBy: string = "---";

  constructor(
    private router: Router,
    private httpService: HttpClientService) { }

  ngOnInit(): void {
    this.callApi();
  }

  callApi() {
    this.httpService.get<any[]>("Evaluation/GetEvaluationByUserId/4")
      .subscribe({
        error: (e) => { console.log(e); },
        next: (e) => { this.lista = e; this.listBackup = e; console.log(e); }
      }
      );
  }

  route(value: any) {
    console.log(value);
    this.router.navigate(["aluno/provas/prova/"], { queryParams: { id: value } });
  }

  filter(value: any) {
    this.orderBy = value; 
      this.lista = this.listBackup; 
      this.sort = false;
      this.filterField ="";
  }

  search(value : string){ 
    if(value != ""){
      this.lista = this.listBackup.filter((p: any) => p[this.orderBy].toLowerCase().includes(value.toLowerCase()));
    }else{
      this.lista = this.listBackup;
    }
  }

  order() { 
    if (this.orderBy != "---") {
       if (this.sort) {
        this.lista.sort((a: any, b: any) => a[this.orderBy].localeCompare(b[this.orderBy]));
        this.sort = false;
      } else {
        this.lista.sort((a: any, b: any) => b[this.orderBy].localeCompare(a[this.orderBy]));
        this.sort = true;
      }
    }else{
      this.lista = this.listBackup;
    }
  }
}
