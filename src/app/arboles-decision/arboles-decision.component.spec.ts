import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbolesDecisionComponent } from './arboles-decision.component';

describe('ArbolesDecisionComponent', () => {
  let component: ArbolesDecisionComponent;
  let fixture: ComponentFixture<ArbolesDecisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArbolesDecisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArbolesDecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
