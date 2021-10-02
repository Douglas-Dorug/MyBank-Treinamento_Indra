import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadatroEdicaoClientesComponent } from './cadatro-edicao-clientes.component';

describe('CadatroEdicaoClientesComponent', () => {
  let component: CadatroEdicaoClientesComponent;
  let fixture: ComponentFixture<CadatroEdicaoClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadatroEdicaoClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadatroEdicaoClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
