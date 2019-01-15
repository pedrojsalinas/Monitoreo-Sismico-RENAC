import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcelerometrosComponent } from './acelerometros.component';

describe('AcelerometrosComponent', () => {
  let component: AcelerometrosComponent;
  let fixture: ComponentFixture<AcelerometrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcelerometrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcelerometrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
