import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductsLinkComponent } from './all-products-link.component';

describe('AllProductsLinkComponent', () => {
  let component: AllProductsLinkComponent;
  let fixture: ComponentFixture<AllProductsLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllProductsLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllProductsLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
