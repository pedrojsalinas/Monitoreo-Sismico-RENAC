import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDataloggerComponent } from './edit-datalogger.component';

describe('EditDataloggerComponent', () => {
  let component: EditDataloggerComponent;
  let fixture: ComponentFixture<EditDataloggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDataloggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDataloggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
