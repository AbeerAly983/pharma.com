import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoseCalcComponent } from './dose-calc.component';

describe('DoseCalcComponent', () => {
  let component: DoseCalcComponent;
  let fixture: ComponentFixture<DoseCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoseCalcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoseCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
