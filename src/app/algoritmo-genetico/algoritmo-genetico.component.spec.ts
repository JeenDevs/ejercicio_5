import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoritmoGeneticoComponent } from './algoritmo-genetico.component';

describe('AlgoritmoGeneticoComponent', () => {
  let component: AlgoritmoGeneticoComponent;
  let fixture: ComponentFixture<AlgoritmoGeneticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgoritmoGeneticoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgoritmoGeneticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
