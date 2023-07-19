import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoseResultsComponent } from './dose-results.component';

describe('DoseResultsComponent', () => {
  let component: DoseResultsComponent;
  let fixture: ComponentFixture<DoseResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoseResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoseResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
