import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkCreateComponent } from './bnk-create.component';

describe('BnkCreateComponent', () => {
  let component: BnkCreateComponent;
  let fixture: ComponentFixture<BnkCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
