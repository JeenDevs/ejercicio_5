import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegresionLinealComponent } from './regresion-lineal.component';

describe('RegresionLinealComponent', () => {
  let component: RegresionLinealComponent;
  let fixture: ComponentFixture<RegresionLinealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegresionLinealComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegresionLinealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
