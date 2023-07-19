import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCoordinatorComponent } from './order-coordinator.component';

describe('OrderCoordinatorComponent', () => {
  let component: OrderCoordinatorComponent;
  let fixture: ComponentFixture<OrderCoordinatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderCoordinatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderCoordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
