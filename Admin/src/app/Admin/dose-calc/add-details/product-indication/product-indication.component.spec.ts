import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductIndicationComponent } from './product-indication.component';

describe('ProductIndicationComponent', () => {
  let component: ProductIndicationComponent;
  let fixture: ComponentFixture<ProductIndicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductIndicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductIndicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
