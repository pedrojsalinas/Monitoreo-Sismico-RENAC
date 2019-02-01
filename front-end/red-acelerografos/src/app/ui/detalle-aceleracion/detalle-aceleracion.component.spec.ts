import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAceleracionComponent } from './detalle-aceleracion.component';

describe('DetalleAceleracionComponent', () => {
  let component: DetalleAceleracionComponent;
  let fixture: ComponentFixture<DetalleAceleracionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleAceleracionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAceleracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
