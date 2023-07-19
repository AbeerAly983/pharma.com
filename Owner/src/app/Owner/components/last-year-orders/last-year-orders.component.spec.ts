import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastYearOrdersComponent } from './last-year-orders.component';

describe('LastYearOrdersComponent', () => {
  let component: LastYearOrdersComponent;
  let fixture: ComponentFixture<LastYearOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastYearOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastYearOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
