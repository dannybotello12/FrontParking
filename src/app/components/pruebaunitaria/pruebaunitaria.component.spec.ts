import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaunitariaComponent } from './pruebaunitaria.component';

describe('PruebaunitariaComponent', () => {
  let component: PruebaunitariaComponent;
  let fixture: ComponentFixture<PruebaunitariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaunitariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaunitariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
