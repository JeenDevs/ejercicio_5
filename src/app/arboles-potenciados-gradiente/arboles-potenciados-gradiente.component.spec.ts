import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbolesPotenciadosGradienteComponent } from './arboles-potenciados-gradiente.component';

describe('ArbolesPotenciadosGradienteComponent', () => {
  let component: ArbolesPotenciadosGradienteComponent;
  let fixture: ComponentFixture<ArbolesPotenciadosGradienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArbolesPotenciadosGradienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArbolesPotenciadosGradienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
