import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import exemplo from '../models/exemplo';
import { HttpClientService } from '../services/http/http-client.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  // Inicializando a variável.
  resultList: exemplo[] = [];
  alertText: string = "Mensagem de teste!";

  constructor(
    private httpService: HttpClientService,
    private toastService: ToastrService,
    private cookieService: CookieService,
    private datePipe: DatePipe
    ) { }

  ngOnInit(): void {
  }

  alert(){
    this.toastService.success(this.alertText);
  }

  userId: any;
  // chamando api.
  callApi(){ 
    console.log(this.userId)
    this.httpService.get<exemplo[]>("UserEvaluation/GetUserEvaluationByUser/"+this.userId+"?typeUser=1")
    .subscribe({
      error: (e) => { this.handlerError(e) },
      next: (e) => { this.response(e) }
    }
    );
  }

  // tratando retorno positivo.
  response(e: exemplo[]){
    if(e.length == 0){
      this.toastService.warning("Nenhum registro encontrado.");
      this.resultList = [];
    }else{
      this.toastService.success("Chamada efetuada com sucesso."); 
      e.forEach(o =>{
        o.dt_creationdate = this.transformDate(o.dt_creationdate);
        o.dt_modifieddate = this.transformDate(o.dt_modifieddate);
      })
      this.resultList = e; 
    }
  }
  
  // tratando retorno negativo.
  handlerError(e: any){ 
    console.log(e);
    this.toastService.error(e["message"]);
  }

  transformDate(date: string | null) { 
    console.log(date)
    if(date != "0001-01-01T00:00:00"){
      return this.datePipe.transform(date, 'dd-MM-YYYY - HH:mm:ss'); 
    } else{
      return "Rem Registro";
    }
  }
}
