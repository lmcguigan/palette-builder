import { Injectable } from '@angular/core';
import { IColor } from '../interfaces/colors';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {
  colors$ = new BehaviorSubject<IColor[]>([])
  colorsAdded$ = new BehaviorSubject<number>(1)
  constructor() { }
  getColorsCopy() {
    return [...this.colors$.getValue()];
  }
  add(newColor: IColor){
    this.colors$.next([...this.getColorsCopy(), newColor])
    const inc = this.colorsAdded$.getValue() + 1
    this.colorsAdded$.next(inc);
  }
  remove(index: number){
    const newArray = [...this.colors$.getValue()]
    newArray.splice(index, 1);
    this.colors$.next(newArray);
  }
  edit(index: number, result: IColor){
    this.colors$.next(this.getColorsCopy().map((e, i) => i === index ? result : e));
  }
  clear(){
    this.colors$.next([]);
    this.colorsAdded$.next(1);
  }
  getColorAtIndex(index): IColor{
    return this.colors$.getValue()[index]
  }
}
