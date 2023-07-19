import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderOneUserComponent } from './order-one-user.component';

describe('OrderOneUserComponent', () => {
  let component: OrderOneUserComponent;
  let fixture: ComponentFixture<OrderOneUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderOneUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderOneUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
