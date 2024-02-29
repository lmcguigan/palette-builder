import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorEditDialogComponent } from './color-edit-dialog.component';

describe('ColorEditDialogComponent', () => {
  let component: ColorEditDialogComponent;
  let fixture: ComponentFixture<ColorEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorEditDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
