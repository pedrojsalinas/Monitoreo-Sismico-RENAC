import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAcelerografoComponent } from './add-acelerografo.component';

describe('AddAcelerografoComponent', () => {
  let component: AddAcelerografoComponent;
  let fixture: ComponentFixture<AddAcelerografoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAcelerografoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAcelerografoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
