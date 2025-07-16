import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonSubmit } from './boton-submit';

describe('BotonSubmit', () => {
  let component: BotonSubmit;
  let fixture: ComponentFixture<BotonSubmit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotonSubmit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonSubmit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
