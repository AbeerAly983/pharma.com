import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLiveSessionComponent } from './update-live-session.component';

describe('UpdateLiveSessionComponent', () => {
  let component: UpdateLiveSessionComponent;
  let fixture: ComponentFixture<UpdateLiveSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLiveSessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLiveSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
