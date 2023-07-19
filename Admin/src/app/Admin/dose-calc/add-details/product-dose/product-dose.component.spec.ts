import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDoseComponent } from './product-dose.component';

describe('ProductDoseComponent', () => {
  let component: ProductDoseComponent;
  let fixture: ComponentFixture<ProductDoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDoseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
