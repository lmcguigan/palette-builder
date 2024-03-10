import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import {ClipboardModule} from '@angular/cdk/clipboard'
import { MatDialogModule } from '@angular/material/dialog';
import { ColorEditDialogComponent } from './components/color-edit-dialog/color-edit-dialog.component'
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { JsonDialogComponent } from './components/json-dialog/json-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { FirstLetterPipe } from './shared/first-letter.pipe';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SignInDialogComponent } from './components/sign-in-dialog/sign-in-dialog.component';
import { AuthService } from './services/auth.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { environment } from 'src/environments/environment';

var firebaseConfig = {
  apiKey: environment.FIREBASE_API_KEY,
  authDomain: environment.FIREBASE_AUTH_DOMAIN,
  databaseURL: environment.FIREBASE_DATABASE_URL,
  projectId: environment.FIREBASE_PROJECT_ID,
  storageBucket: environment.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: environment.FIREBASE_MESSAGING_SENDER_ID,
  appId: environment.FIREBASE_APP_ID
};

console.log(firebaseConfig)

@NgModule({
  declarations: [
    AppComponent,
    ColorEditDialogComponent,
    JsonDialogComponent,
    SignInDialogComponent,
    FirstLetterPipe,
  ],
  entryComponents: [
    ColorEditDialogComponent,
    JsonDialogComponent,
    SignInDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    BrowserAnimationsModule,
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSliderModule,
    MatDividerModule,
    MatListModule,
    MatSnackBarModule,
    FormsModule,
    MatFormFieldModule,
    ClipboardModule,
  ],
  providers: [
    AuthService,
    MatSnackBarModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
