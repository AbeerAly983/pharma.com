import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastYearSalesComponent } from './last-year-sales.component';

describe('LastYearSalesComponent', () => {
  let component: LastYearSalesComponent;
  let fixture: ComponentFixture<LastYearSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastYearSalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastYearSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
