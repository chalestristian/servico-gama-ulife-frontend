import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardConfigGuard implements CanActivate {

  constructor(
    protected router: Router,
    protected cookieService: CookieService
    ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      var token = this.cookieService.get("token");
      var role = this.cookieService.get("role"); 

      // TODO: Definir regras para redirecionamento/autenticação.   

      //Caso o Token não existe mais, o aluno/professor será redireciona para o Login.
      if(state.url != "/" && (token == '' || token == undefined)){
        this.router.navigate(['']);
      }

      // Redireciona o aluno, caso o mesmo tente acessar uma página não autorizada.
      if(state.url.startsWith("/aluno") && role != "aluno"){
        this.router.navigate(['notFound']);
      }

      // Redireciona o professor, caso o mesmo tente acessar uma página não autorizada.
      if(state.url.startsWith("/professor") && role != "professor"){
        this.router.navigate(['notFound']);
      }

      if(state.url == "/"){
        this.cookieService.deleteAll("/");  
      }

    return true;
  }
  
}
