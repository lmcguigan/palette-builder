import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreviewRoutingModule } from './preview-routing.module';
import { PreviewComponent } from './preview.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [PreviewComponent],
  imports: [
    CommonModule,
    PreviewRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
  ]
})
export class PreviewModule { }
