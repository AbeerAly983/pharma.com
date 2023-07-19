import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotdeliveredOrderComponent } from './notdelivered-order.component';

describe('NotdeliveredOrderComponent', () => {
  let component: NotdeliveredOrderComponent;
  let fixture: ComponentFixture<NotdeliveredOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotdeliveredOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotdeliveredOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
