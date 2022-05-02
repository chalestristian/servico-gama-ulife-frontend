import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientService } from '../services/http/http-client.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
 
  customTitle: string = "4";

  constructor(
    private httpService: HttpClientService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.customTitle = this.router.parseUrl(this.router.url).queryParams['id'];
    this.callApi();
  }
  
  questionList: any = [];
  questionnaire: any;
  answers: any = [];
  selected: string = "Provas";
  loadding: boolean = false;
  sendLoadding: boolean = false;
  disabled: boolean = true;

  callApi() {
    this.httpService.get<any[]>("Questionnaire/" + this.customTitle)
      .subscribe({
        error: (e) => { this.handlerError(e) },
        next: (e) => { this.questionnaire = e; }
      }
      );
    this.httpService.get<any[]>("Questionnaire/" + this.customTitle + "/QuestionList")
      .subscribe({
        error: (e) => { this.handlerError(e) },
        next: (e) => { this.questionList = e; this.loadding = true; console.log(this.questionList) }
      }
      );
  }

  submitForm() {
    this.httpService.post<any[]>({ Answers: this.answers }, "Evaluation/4/"+this.customTitle)
      .subscribe({
        error: (e) => { this.handlerError(e) },
        next: (e) => { 
          this.back();
        }
      }
      );
    this.sendLoadding = true;
    this.disabled = false;
    
  }

  handlerError(e: any) {
    // TODO: Verificar.
  }
  back() {
    this.router.navigate(["aluno/provas"]);
  }
}