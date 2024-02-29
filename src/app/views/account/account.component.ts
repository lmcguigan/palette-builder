import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import {IFirestorePalette} from 'src/app/interfaces/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { PaletteService } from 'src/app/services/palette.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  iseditingEmail = false;
  iseditingName = false;
  email: FormControl;
  name: FormControl;
  palettes$ = new BehaviorSubject<IFirestorePalette[]>([])
  constructor(
    public authService: AuthService,
    public router: Router,
    public dialog: MatDialog,
    private paletteService: PaletteService,
    private snackbar: MatSnackBar
  ) { 
    this.name = new FormControl('');
    this.email = new FormControl('');
  }

  ngOnInit(): void {
    this.authService.user$.subscribe((value: User) => {
      if(value){
        if(value.email){
          this.email.setValue(value.email);
        }
        if(value.displayName){
          this.name.setValue(value.displayName);
        }
      }
    })
    this.paletteService.palettes$
      .pipe()
      .subscribe((e) => this.palettes$.next(e))
  }
  onEditName(){
    this.iseditingName = !this.iseditingName
  }
  onSaveName(){
    this.authService.updateName(this.name.value).then(() => {
      this.iseditingName = false;
    })
    .catch(err => {
      console.log('error updating name')
    })
  }
  onEditEmail(){
    this.iseditingEmail = !this.iseditingEmail
  }
  onSaveEmail(){
    this.authService.updateEmail(this.email.value).then(() => {
      this.iseditingEmail = false;
    })
    .catch(err => {
      // this.dialog.open()
    })
  }
  updateDisplayName(name: string) {
    this.authService.updateName(name)
  }
  deletePalette(id: string){
    this.paletteService.deletePalette(id).then(() => {
      this.snackbar.open('Sucessfully deleted palette', undefined, {duration: 5000})
    })
    .catch(err => {
      // TODO: Show error
    })
  }

}
