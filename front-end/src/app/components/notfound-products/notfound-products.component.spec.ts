import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundProductsComponent } from './notfound-products.component';

describe('NotfoundProductsComponent', () => {
  let component: NotfoundProductsComponent;
  let fixture: ComponentFixture<NotfoundProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotfoundProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotfoundProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
