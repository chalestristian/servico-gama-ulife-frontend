import { Component, Input, OnInit } from '@angular/core'; 
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientService } from '../services/http/http-client.service'; 

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  
  //@Input()
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
  answers: any = {};
  selected: string = "Provas";
  loadding: boolean = false;
  sendLoadding: boolean = false;
  disabled: boolean = true;

  callApi() {
    this.httpService.get<any[]>("Questionnaire/" + this.customTitle)
      .subscribe({
        error: (e) => { this.handlerError(e) },
        next: (e) => { this.questionnaire = e;}
      }
      );
    this.httpService.get<any[]>("Questionnaire/" + this.customTitle + "/QuestionList")
      .subscribe({
        error: (e) => { this.handlerError(e) },
        next: (e) => {  this.questionList = e; this.loadding = true; }
      }
      );
    } 
  submitForm(){  
    this.sendLoadding = true;
    this.disabled = false;  
    setTimeout(()=>{
      console.log(this.answers);  
      this.back();
    }, 5000);
  }
 
  handlerError(e: any) {
    console.log(e);
  } 
  back(){ 
    this.router.navigate(["aluno/provas"]);
  }
}