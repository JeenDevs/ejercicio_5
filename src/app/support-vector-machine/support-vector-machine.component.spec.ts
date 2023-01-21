import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportVectorMachineComponent } from './support-vector-machine.component';

describe('SupportVectorMachineComponent', () => {
  let component: SupportVectorMachineComponent;
  let fixture: ComponentFixture<SupportVectorMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportVectorMachineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportVectorMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
