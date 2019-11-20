import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkDetailsComponent } from './bnk-details.component';

describe('BnkDetailsComponent', () => {
  let component: BnkDetailsComponent;
  let fixture: ComponentFixture<BnkDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
