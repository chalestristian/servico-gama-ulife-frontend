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
  email: string = "";
  password: string = "";

  async submit() {
    
    this.cookieTest();
    this.router.navigate(['professor']);
/*     let data = {
      user: this.email,
      password: this.password
    };
    this.loading = true;
    this.httpService.post<auth>(data, "UserAuthentication")
      .subscribe({
        error: (e) => { this.handlerError(e) },
        next: (e) => { this.verifyLogin(e) }
      }
      );
 */
  }

  clearCookie(){
    this.cookieService.deleteAll();
  }

  // TODO: Remover, utilizado para testes.
  cookieTest(){
    this.cookieService.set('logged','true', { expires: 1 });
    this.cookieService.set("token", '123123123', { expires: 1 });
    this.cookieService.set("name", 'Victor A. Lanni', { expires: 1 });
    this.cookieService.set("role", 'professor', { expires: 1 });
  }

  cookie(data : auth){
    this.cookieService.set('logged','true', { expires: 1 });
    this.cookieService.set("token", data.token, { expires: 1 });
    this.cookieService.set("name", data.name, { expires: 1 });
    this.cookieService.set("role", data.role.toString(), { expires: 1 });
  }

  verifyLogin(data: auth) {
    this.cookie(data);
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
    this.toastService.success("Usuário ou senha incorreto");
    console.log(data);
    this.loading = false;
  }
}
