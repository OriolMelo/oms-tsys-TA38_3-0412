import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificadorComponent } from './modificador.component';

describe('ModificadorComponent', () => {
  let component: ModificadorComponent;
  let fixture: ComponentFixture<ModificadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModificadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
