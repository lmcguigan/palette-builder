import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {IColor} from '../../interfaces/colors'

interface IJsonDialogData {
  colors: IColor[]
}

@Component({
  selector: 'app-json-dialog',
  templateUrl: './json-dialog.component.html',
  styleUrls: ['./json-dialog.component.scss']
})
export class JsonDialogComponent implements OnInit {
  object = {}
  stringifiedObject: string
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IJsonDialogData
  ) { }

  ngOnInit(): void {
    let jsonObject = {}
    this.data.colors.forEach((color) => {
      jsonObject[color.name.toLowerCase()] = color.hex ?? color.color; 
    })
    this.object = jsonObject;
    this.stringifiedObject = JSON.stringify(jsonObject);
  }

}
