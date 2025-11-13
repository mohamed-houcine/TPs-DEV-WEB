import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProduit } from './liste-produit';

describe('ListeProduit', () => {
  let component: ListeProduit;
  let fixture: ComponentFixture<ListeProduit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeProduit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeProduit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
