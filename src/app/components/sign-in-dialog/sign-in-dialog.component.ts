import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in-dialog',
  templateUrl: './sign-in-dialog.component.html',
  styleUrls: ['./sign-in-dialog.component.scss']
})
export class SignInDialogComponent implements OnInit {
  email: string
  password: string
  error: string | undefined
  constructor(
    private authService: AuthService,
    private dialogRef: MatDialogRef<SignInDialogComponent>,
    private snackbar: MatSnackBar,
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
        this.error = "The email and password don't correspond with any in our records."
        this.cd.detectChanges()
      })
  }
  onSignUp() {
    this.authService.signUp(this.email, this.password)
      .then(() => {
        this.dialogRef.close()
      }).catch((err) => {
        this.error = "We encountered an issue while signing you up. Please try again."
      })
  }
  onResetPassword(){
    console.log('reset password')
    if(this.email){
      console.log(this.email)
      this.authService.requestPasswordReset(this.email).then(res => {
        this.dialogRef.close()
        this.snackbar.open("Password reset instructions sent to email.", undefined, {duration: 500})
      })
    } else {
      this.error = "Please enter a valid email address in the field above."
    }
  }

}
