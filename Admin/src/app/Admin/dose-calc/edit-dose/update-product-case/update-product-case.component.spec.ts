import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProductCaseComponent } from './update-product-case.component';

describe('UpdateProductCaseComponent', () => {
  let component: UpdateProductCaseComponent;
  let fixture: ComponentFixture<UpdateProductCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProductCaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateProductCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
