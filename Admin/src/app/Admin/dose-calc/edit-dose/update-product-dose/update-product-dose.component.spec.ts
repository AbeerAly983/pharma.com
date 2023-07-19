import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProductDoseComponent } from './update-product-dose.component';

describe('UpdateProductDoseComponent', () => {
  let component: UpdateProductDoseComponent;
  let fixture: ComponentFixture<UpdateProductDoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProductDoseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateProductDoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
