import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLiveSessionComponent } from './add-live-session.component';

describe('AddLiveSessionComponent', () => {
  let component: AddLiveSessionComponent;
  let fixture: ComponentFixture<AddLiveSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLiveSessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLiveSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
