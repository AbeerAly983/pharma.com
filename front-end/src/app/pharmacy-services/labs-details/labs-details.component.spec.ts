import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabsDetailsComponent } from './labs-details.component';

describe('LabsDetailsComponent', () => {
  let component: LabsDetailsComponent;
  let fixture: ComponentFixture<LabsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
