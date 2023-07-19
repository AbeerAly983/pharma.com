import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAccountantComponent } from './profile-accountant.component';

describe('ProfileAccountantComponent', () => {
  let component: ProfileAccountantComponent;
  let fixture: ComponentFixture<ProfileAccountantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileAccountantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileAccountantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
