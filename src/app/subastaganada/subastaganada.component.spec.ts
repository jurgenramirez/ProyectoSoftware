import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubastaganadaComponent } from './subastaganada.component';

describe('SubastaganadaComponent', () => {
  let component: SubastaganadaComponent;
  let fixture: ComponentFixture<SubastaganadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubastaganadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubastaganadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
