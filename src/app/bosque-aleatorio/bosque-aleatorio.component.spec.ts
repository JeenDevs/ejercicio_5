import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BosqueAleatorioComponent } from './bosque-aleatorio.component';

describe('BosqueAleatorioComponent', () => {
  let component: BosqueAleatorioComponent;
  let fixture: ComponentFixture<BosqueAleatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BosqueAleatorioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BosqueAleatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
