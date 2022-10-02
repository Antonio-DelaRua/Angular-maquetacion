import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeportivosComponent } from './deportivos.component';

describe('DeportivosComponent', () => {
  let component: DeportivosComponent;
  let fixture: ComponentFixture<DeportivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeportivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeportivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
