import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProductIndicationComponent } from './update-product-indication.component';

describe('UpdateProductIndicationComponent', () => {
  let component: UpdateProductIndicationComponent;
  let fixture: ComponentFixture<UpdateProductIndicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProductIndicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateProductIndicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
