import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkRegisterComponent } from './bnk-register.component';

describe('BnkRegisterComponent', () => {
  let component: BnkRegisterComponent;
  let fixture: ComponentFixture<BnkRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
