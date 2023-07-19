import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarOwnerComponent } from './sidebar-owner.component';

describe( 'SidebarOwnerComponent', () => {
  let component: SidebarOwnerComponent;
  let fixture: ComponentFixture<SidebarOwnerComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [SidebarOwnerComponent]
    } )
      .compileComponents();

    fixture = TestBed.createComponent( SidebarOwnerComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
