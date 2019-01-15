import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAcelerografoComponent } from './edit-acelerografo.component';

describe('EditAcelerografoComponent', () => {
  let component: EditAcelerografoComponent;
  let fixture: ComponentFixture<EditAcelerografoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAcelerografoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAcelerografoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
