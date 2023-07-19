import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyNewsComponent } from './pharmacy-news.component';

describe('PharmacyNewsComponent', () => {
  let component: PharmacyNewsComponent;
  let fixture: ComponentFixture<PharmacyNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacyNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
