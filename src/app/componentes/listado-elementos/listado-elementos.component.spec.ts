import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoElementosComponent } from './listado-elementos.component';

describe('ListadoElementosComponent', () => {
  let component: ListadoElementosComponent;
  let fixture: ComponentFixture<ListadoElementosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoElementosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoElementosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
