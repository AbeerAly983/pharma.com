import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundDataComponent } from './notfound-data.component';

describe('NotfoundDataComponent', () => {
  let component: NotfoundDataComponent;
  let fixture: ComponentFixture<NotfoundDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotfoundDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotfoundDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
