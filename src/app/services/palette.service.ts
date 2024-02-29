import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { from } from "rxjs";
import { filter, map, switchMap } from "rxjs/operators";
import { IFirestorePalette } from "../interfaces/firestore";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class PaletteService{
    constructor(
        private db: AngularFirestore,
        private authService: AuthService
    ){}
    palettes$ = this.authService.user$.pipe(
        filter(user => !!user),
        switchMap((user) => {
            return from(this.db.collection('palettes', ref => ref.where('ownerAuthId', '==', user.uid))
            .snapshotChanges()
            .pipe(
                map((actions) => {
                    return actions.map(a => {
                        const data = a.payload.doc.data() as Partial<IFirestorePalette>
                        return {...data, id: a.payload.doc.id}
                    })
                })
            ))
        })
    )
    addPalette(name: string, colors): Promise<void>{
        const user = this.authService.user$.getValue()
        return this.db.collection('palettes').doc().set({
            ownerAuthId: user.uid,
            name,
            colors
        })
    }
    deletePalette(id: string): Promise<void>{
        return this.db.collection('palettes').doc(id).delete()
    }
}