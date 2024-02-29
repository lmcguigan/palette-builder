import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SignInDialogComponent } from './components/sign-in-dialog/sign-in-dialog.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'palette';
  constructor(
    private dialog: MatDialog,
    public authService: AuthService,
    private router: Router,
  ){
    this.authService.user$.subscribe();
  }
  onClickSignIn(){
    this.dialog.open(SignInDialogComponent)
  }
  onClickMyAccount(){
    this.router.navigate(['account'])
  }
  onClickBuilder(){
    this.router.navigate(['/'])
  }
  onClickSignOut(){
    this.authService.logout()
  }
}
