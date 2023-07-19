import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCoordinatorsComponent } from './order-coordinators.component';

describe('OrderCoordinatorsComponent', () => {
  let component: OrderCoordinatorsComponent;
  let fixture: ComponentFixture<OrderCoordinatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderCoordinatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderCoordinatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
