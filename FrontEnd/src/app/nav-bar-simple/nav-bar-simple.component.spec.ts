import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarSimpleComponent } from './nav-bar-simple.component';

describe('NavBarSimpleComponent', () => {
  let component: NavBarSimpleComponent;
  let fixture: ComponentFixture<NavBarSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
