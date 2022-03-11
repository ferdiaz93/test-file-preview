import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetelipbuttonComponent } from './netelipbutton.component';

describe('NetelipbuttonComponent', () => {
  let component: NetelipbuttonComponent;
  let fixture: ComponentFixture<NetelipbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetelipbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetelipbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
