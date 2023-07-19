import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAccountantComponent } from './sidebar-accountant.component';

describe('SidebarAccountantComponent', () => {
  let component: SidebarAccountantComponent;
  let fixture: ComponentFixture<SidebarAccountantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarAccountantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarAccountantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
