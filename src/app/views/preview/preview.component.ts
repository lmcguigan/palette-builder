import { Component, OnInit, OnDestroy } from '@angular/core';
import { ColorsService } from 'src/app/services/colors.service';
import { Subject } from 'rxjs';
import {takeUntil} from 'rxjs/operators'
import { getDarkestColor, getLightestColor } from 'src/app/utils/convert-color-utils';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit, OnDestroy {
  onDestroy$: Subject<boolean> = new Subject<boolean>();
  mode: 'light' | 'dark' = 'light'
  textColor: string;
  backgroundColor: string;
  buttonPrimaryColor: string;
  buttonSecondaryColor: string;
  constructor(
    public colorService: ColorsService,
  ) { }

  ngOnInit(): void {
    this.colorService.colors$
    .pipe(takeUntil(this.onDestroy$))
    .subscribe((colors) => {
      const lightest = getLightestColor(colors)
      const darkest = getDarkestColor(colors)
      console.log(lightest, darkest)
      this.backgroundColor = lightest?.hex
      this.textColor = darkest?.hex
      const remaining = colors.filter((color) => color !== lightest && color !== darkest);
      this.buttonPrimaryColor = remaining[0]?.hex;
      this.buttonSecondaryColor = remaining[1]?.hex;
    });
  }
  ngOnDestroy(): void {
    this.onDestroy$.next(true);
  }
  onEditColor(index: number){

  }
  onDeleteColor(index: number){
    
  }

}
