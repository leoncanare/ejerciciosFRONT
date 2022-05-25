import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/auth/interfaces/auth.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
  .container {
      margin: 10px;
    }
  `
  ]
})
export class HomeComponent implements OnInit {
  
  constructor(private router: Router,
    private authService: AuthService ) { }
    
    ngOnInit(): void {
    }

  // [INFO] Para mostrar la infoemacion del usuario enciame de nuestro menu heroes lo que hacemos es subscribirnos a nuestro authService
  get auth() {
    return this.authService.auth;
  }
    
  logout() {

    this.router.navigate(['./auth']);

  }

}
