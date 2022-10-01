import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperDeportivosComponent } from './super-deportivos.component';

describe('SuperDeportivosComponent', () => {
  let component: SuperDeportivosComponent;
  let fixture: ComponentFixture<SuperDeportivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperDeportivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperDeportivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
