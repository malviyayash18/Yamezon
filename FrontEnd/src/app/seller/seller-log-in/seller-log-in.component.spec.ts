import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerLogInComponent } from './seller-log-in.component';

describe('SellerLogInComponent', () => {
  let component: SellerLogInComponent;
  let fixture: ComponentFixture<SellerLogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerLogInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
