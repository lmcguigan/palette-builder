import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in-dialog',
  templateUrl: './sign-in-dialog.component.html',
  styleUrls: ['./sign-in-dialog.component.scss']
})
export class SignInDialogComponent implements OnInit {
  email: string
  password: string
  showError: boolean
  constructor(
    private authService: AuthService,
    private dialogRef: MatDialogRef<SignInDialogComponent>,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }
  onSignIn() {
    this.authService.login(this.email, this.password)
      .then(() => {
        this.dialogRef.close()
      }).catch((err) => {
        // show error
        this.showError = true
        console.log(this.showError)
        this.cd.detectChanges()
      })
  }
  onSignUp() {
    this.authService.signUp(this.email, this.password)
      .then(() => {
        this.dialogRef.close()
      }).catch((err) => {
        // show error
        console.log(err)
      })
  }

}
