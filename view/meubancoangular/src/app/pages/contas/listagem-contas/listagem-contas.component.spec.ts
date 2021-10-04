import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemContasComponent } from './listagem-contas.component';

describe('ListagemContasComponent', () => {
  let component: ListagemContasComponent;
  let fixture: ComponentFixture<ListagemContasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemContasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemContasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
