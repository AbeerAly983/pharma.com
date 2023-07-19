import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopOrderComponent } from './top-order.component';

describe('TopOrderComponent', () => {
  let component: TopOrderComponent;
  let fixture: ComponentFixture<TopOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
