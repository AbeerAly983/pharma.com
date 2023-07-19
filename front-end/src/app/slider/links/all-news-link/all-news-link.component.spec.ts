import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllNewsLinkComponent } from './all-news-link.component';
describe('AllNewsLinkComponent', () => {
  let component: AllNewsLinkComponent;
  let fixture: ComponentFixture<AllNewsLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllNewsLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllNewsLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
