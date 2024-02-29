import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ColorEditDialogComponent } from '../../components/color-edit-dialog/color-edit-dialog.component';
import { JsonDialogComponent } from '../../components/json-dialog/json-dialog.component';
import { IColor, ISliderControl, colorMode, colorModes, SliderControlNameType } from '../../interfaces/colors'
import { IFirestoreColor } from '../../interfaces/firestore'
import { getHex, getColorString, convertHex } from '../../utils/convert-color-utils';
import { Router } from '@angular/router';
import { ColorsService } from 'src/app/services/colors.service';
import { Subject } from 'rxjs';
import { buildGradient } from 'src/app/utils/gradient-utils';
import { PaletteService } from 'src/app/services/palette.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class MainComponent implements OnInit, OnDestroy {
  colorName: string = 'Color1'
  paletteName: string = 'My new palette'
  colorMode: colorMode = 'HSL'
  sliderControls: ISliderControl[] = [...colorModes[1].sliderControls]
  currentColorString: string = 'hsl(0, 0%, 0%)';
  currentColorHex: string = "#000000"
  colorCount: number = 1
  usedColorNames: string[];
  usedColorHexs: string[];
  onDestroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    public dialog: MatDialog,
    public router: Router,
    public colorService: ColorsService,
    private paletteService: PaletteService,
    private snackbar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.updateColorString();
    this.colorService.colors$.subscribe((value) => {
      this.usedColorNames = value.map((e) => e.name);
      this.usedColorHexs = value.map((e) => e.hex);
      this.colorCount = value.length + 1;
      this.colorName = `Color${this.colorCount}`
    });
  }
  ngOnDestroy(): void {
    this.onDestroy$.next(true);
  }
  updateColorString(){
    const controlValues = this.sliderControls.map((cont) => cont.currentValue) as [number, number, number]
    this.currentColorString = getColorString(this.colorMode, this.sliderControls);
    this.currentColorHex = getHex(controlValues, this.colorMode);
  }
  onSliderChanged(){
    this.updateColorString();
  }
  getBg(name: SliderControlNameType){
    return buildGradient(name, this.sliderControls)
  }
  onAdd(){
    // TODO: Move this to a util
    const controls = this.sliderControls.map((obj) => Object.assign({}, obj))
    const newColor: IColor = {
      name: this.colorName, 
      color: this.currentColorString,
      editMode: this.colorMode,
      hex: this.currentColorHex,
      controls: controls,
    }
    this.colorService.add(newColor);
  }
  onRemoveColor(index: number){
    this.colorService.remove(index);
  }
  onEditColor(index: number){
    const dialogRef = this.dialog.open(ColorEditDialogComponent, {
      data: { selectedColor: this.colorService.getColorAtIndex(index) }
    });

    dialogRef.afterClosed().subscribe((result: IColor)=> {
      if(result){
        this.colorService.edit(index, result);
      }
    });
  }
  onColorModeChanged(e: colorMode){
    this.colorMode = e;
    this.sliderControls = convertHex(this.currentColorHex, e);
    this.updateColorString();
  }
  onGetJson(){
    this.dialog.open(JsonDialogComponent, { data: { colors: this.colorService.colors$.getValue() } });
  }
  onSavePalette(){
    // TODO: Move this to a util
    const firebaseColors: IFirestoreColor[] = this.colorService.colors$.getValue().map((color) => 
    {    
      return {
      color: color.color,
      hex: color.hex,
      mode: color.editMode,
      name: color.name,
      }
    }) 
    this.paletteService.addPalette(this.paletteName, firebaseColors).then(() => {
      this.snackbar.open('Palette saved successfully!', undefined, {duration: 5000})
      this.colorService.clear()
    }).catch((err) => {
      // TODO - show error modal
      console.log('Error saving palette', err)
    })
  }
  goToPreview(){
    this.router.navigate(['/preview'])
  }
}
