import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPoromotionsLinkComponent } from './all-poromotions-link.component';

describe('AllPoromotionsLinkComponent', () => {
  let component: AllPoromotionsLinkComponent;
  let fixture: ComponentFixture<AllPoromotionsLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPoromotionsLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPoromotionsLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
