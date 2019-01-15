import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDataloggerComponent } from './add-datalogger.component';

describe('AddDataloggerComponent', () => {
  let component: AddDataloggerComponent;
  let fixture: ComponentFixture<AddDataloggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDataloggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDataloggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
