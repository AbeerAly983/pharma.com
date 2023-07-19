import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverdOrderComponent } from './deliverd-order.component';

describe('DeliverdOrderComponent', () => {
  let component: DeliverdOrderComponent;
  let fixture: ComponentFixture<DeliverdOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliverdOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliverdOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
