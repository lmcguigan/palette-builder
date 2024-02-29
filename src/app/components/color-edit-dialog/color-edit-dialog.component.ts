import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IColor, ISliderControl, colorMode } from 'src/app/interfaces/colors';
import { getColorString, getHex, convertHex } from 'src/app/utils/convert-color-utils';

interface IColorEditDialogData {
  selectedColor: IColor,
}

@Component({
  selector: 'app-color-edit-dialog',
  templateUrl: './color-edit-dialog.component.html',
  styleUrls: ['./color-edit-dialog.component.scss']
})
export class ColorEditDialogComponent implements OnInit {
  colorName: string;
  colorMode: colorMode;
  controls: ISliderControl[]
  currentColorString: string;
  currentColorHex: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: IColorEditDialogData,
    private dialogRef: MatDialogRef<ColorEditDialogComponent>
  ) { }

  ngOnInit(): void {
    this.colorName = this.data.selectedColor.name;
    this.colorMode = this.data.selectedColor.editMode;
    this.controls = this.data.selectedColor.controls;
    this.currentColorString = this.data.selectedColor.color;
    this.currentColorHex = this.data.selectedColor.hex;
  }
  onColorModeChanged(e){
    this.colorMode = e;
    this.controls = convertHex(this.currentColorHex, e);
    this.updateColorString();
  }
  updateColorString(){
    const controlValues = this.controls.map((cont) => cont.currentValue) as [number, number, number]
    this.currentColorString = getColorString(this.colorMode, this.controls);
    this.currentColorHex = getHex(controlValues, this.colorMode);
  }
  onSliderChanged(){
    this.updateColorString()
  }
  onSave(){
    const controlValues = this.controls.map((cont) => cont.currentValue) as [number, number, number]
    this.dialogRef.close({
      name: this.colorName,
      color: getColorString(this.colorMode, this.controls),
      editMode: this.colorMode,
      hex: getHex(controlValues, this.colorMode),
      controls: this.controls,
    })
  }
  onDiscard(){
    this.dialogRef.close()
  }

}
