import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkListComponent } from './bnk-list.component';

describe('BnkListComponent', () => {
  let component: BnkListComponent;
  let fixture: ComponentFixture<BnkListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
