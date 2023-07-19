import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCanceledQuantComponent } from './add-canceled-quant.component';

describe('AddCanceledQuantComponent', () => {
  let component: AddCanceledQuantComponent;
  let fixture: ComponentFixture<AddCanceledQuantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCanceledQuantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCanceledQuantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
