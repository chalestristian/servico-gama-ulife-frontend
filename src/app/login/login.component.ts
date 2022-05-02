import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';  
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClientService } from '../services/http/http-client.service';
import auth from '../models/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private httpService: HttpClientService,
    private toastService: ToastrService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.clearCookie();
  }

  loading: boolean = false;
  email: string = '';
  password: string = '';

  async submit() {
     let data = {
      user: this.email,
      password: this.password
    };
    this.loading = true;
    this.httpService.post<auth>(data, 'UserAuthentication')
      .subscribe({
        error: (e) => { this.handlerError(e) },
        next: (e) => {   
          this.cookie(e); 
          this.verifyLogin(e);
        }
      }
      );
  }

  clearCookie(){
    this.cookieService.deleteAll();
  } 

  cookie(data : auth){

    var role = '';
    if(data.role == 1){
      role = 'aluno';
    }else if(data.role == 2){
      role = 'professor';
    }
    this.cookieService.set('token', data.token, { expires: 1, path:'/' });
    this.cookieService.set('role', role, { expires: 1, path:'/' });
    this.cookieService.set('name', data.name, { expires: 1, path:'/' }); 
  }

  verifyLogin(data: auth) { 
    this.loading = false;   
    switch (data.role) {
      case 1:
        //TODO: Definir rota do aluno 
        this.router.navigate(['aluno'])
        break;
      case 2:
        //TODO: Definir rota do professor 
        this.router.navigate(['professor'])
        break;
      default: 
        break;
    }
  }

  handlerError(data: any) {
    this.toastService.error('Usuário ou senha incorreto'); 
    this.loading = false;
  }
}
