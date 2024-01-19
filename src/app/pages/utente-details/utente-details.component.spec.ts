import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtenteDetailsComponent } from './utente-details.component';

describe('UtenteDetailsComponent', () => {
  let component: UtenteDetailsComponent;
  let fixture: ComponentFixture<UtenteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UtenteDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UtenteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
