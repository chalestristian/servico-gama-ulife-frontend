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
  list: any = [];
  listBackup: any = [];
  filterField: string = "";
  selected: string = "Provas";
  orderBy: string = "---";
  loadding: boolean = true;

  constructor(
    private router: Router,
    private httpService: HttpClientService) { }

  ngOnInit(): void {
    this.callApi();
  }

  callApi() {
    this.httpService.get<any[]>("Evaluation/GetEvaluationByUserId")
      .subscribe({
        error: (e) => { this.loadding = false; },
        next: (e) => { this.list = e; this.listBackup = e; this.loadding = false; }
      }
      ); 
  }

  route(value: any) {
    this.router.navigate(["aluno/provas/prova/"], { queryParams: { id: value } });
  }

  filter(value: any) {
    this.orderBy = value;
    this.list = this.listBackup;
    this.sort = false;
    this.filterField = "";
  }

  search(value: string) {
    if (value != "") {
      this.list = this.listBackup.filter((p: any) => p[this.orderBy].toLowerCase().includes(value.toLowerCase()));
    } else {
      this.list = this.listBackup;
    }
  }

  order() {
    if (this.orderBy != "---") {
      if (this.sort) {
        this.list.sort((a: any, b: any) => a[this.orderBy].localeCompare(b[this.orderBy]));
        this.sort = false;
      } else {
        this.list.sort((a: any, b: any) => b[this.orderBy].localeCompare(a[this.orderBy]));
        this.sort = true;
      }
    } else {
      this.list = this.listBackup;
    }
  }
}
