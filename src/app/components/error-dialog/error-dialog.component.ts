import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss']
})
export class ErrorDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<ErrorDialogComponent>,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }
  onClickOkay(){}

}
