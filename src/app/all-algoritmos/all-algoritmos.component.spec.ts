import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAlgoritmosComponent } from './all-algoritmos.component';

describe('AllAlgoritmosComponent', () => {
  let component: AllAlgoritmosComponent;
  let fixture: ComponentFixture<AllAlgoritmosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAlgoritmosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllAlgoritmosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
