import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkLoginComponent } from './bnk-login.component';

describe('BnkLoginComponent', () => {
  let component: BnkLoginComponent;
  let fixture: ComponentFixture<BnkLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
