import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrderCoordinatorComponent } from './add-order-coordinator.component';

describe('AddOrderCoordinatorComponent', () => {
  let component: AddOrderCoordinatorComponent;
  let fixture: ComponentFixture<AddOrderCoordinatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrderCoordinatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOrderCoordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
