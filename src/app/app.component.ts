import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  constructor(private cookieService: CookieService) {  }
  title = 'gama-ulife-frontend';
  logged : string = "false";
 
  ngOnInit(): void {  
    this.logged = this.cookieService.get('logged');
  }
}
