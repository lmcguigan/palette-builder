import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    user$ = new BehaviorSubject<User | null>(null)
    constructor(
        public auth: AngularFireAuth
    ){
        this.auth.user.subscribe((value) => {
            if(value){
                this.user$.next(value);
            } else {
                this.user$.next(null)
            }
        })
    }
    signUp(email: string, password: string){
        return this.auth.createUserWithEmailAndPassword(email, password);
    }
    async login(email: string, password: string){
        return this.auth.signInWithEmailAndPassword(email, password)
        .then(res => res)
        .catch(err => {throw err});
    }
    logout() {
        return this.auth.signOut();
    }
    async updateName(name: string) {
        return (await this.auth.currentUser).updateProfile({displayName: name});
        
    }
    async updateEmail(email: string) {
        return (await this.auth.currentUser).updateEmail(email);
        
    }
    async requestPasswordReset(email: string){
        return this.auth.sendPasswordResetEmail(email).then(res => res)
        .catch(err => {throw err})
    }
}