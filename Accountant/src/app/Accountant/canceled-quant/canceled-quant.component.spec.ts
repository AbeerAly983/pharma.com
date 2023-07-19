import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanceledQuantComponent } from './canceled-quant.component';

describe('CanceledQuantComponent', () => {
  let component: CanceledQuantComponent;
  let fixture: ComponentFixture<CanceledQuantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanceledQuantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanceledQuantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
