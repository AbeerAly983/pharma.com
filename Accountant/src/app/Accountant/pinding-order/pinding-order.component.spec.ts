import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PindingOrderComponent } from './pinding-order.component';

describe('PindingOrderComponent', () => {
  let component: PindingOrderComponent;
  let fixture: ComponentFixture<PindingOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PindingOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PindingOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
