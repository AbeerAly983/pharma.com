import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPendingComponent } from './top-pending.component';

describe('TopPendingComponent', () => {
  let component: TopPendingComponent;
  let fixture: ComponentFixture<TopPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopPendingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
