import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkEditComponent } from './bnk-edit.component';

describe('BnkEditComponent', () => {
  let component: BnkEditComponent;
  let fixture: ComponentFixture<BnkEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
