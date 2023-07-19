import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastYearUsersComponent } from './last-year-users.component';

describe('LastYearUsersComponent', () => {
  let component: LastYearUsersComponent;
  let fixture: ComponentFixture<LastYearUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastYearUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastYearUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
