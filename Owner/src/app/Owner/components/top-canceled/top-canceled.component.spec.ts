import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCanceledComponent } from './top-canceled.component';

describe('TopCanceledComponent', () => {
  let component: TopCanceledComponent;
  let fixture: ComponentFixture<TopCanceledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopCanceledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopCanceledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
