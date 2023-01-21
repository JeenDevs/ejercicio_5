import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegresionLinealMultipleComponent } from './regresion-lineal-multiple.component';

describe('RegresionLinealMultipleComponent', () => {
  let component: RegresionLinealMultipleComponent;
  let fixture: ComponentFixture<RegresionLinealMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegresionLinealMultipleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegresionLinealMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
