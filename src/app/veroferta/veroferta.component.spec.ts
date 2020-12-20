import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerofertaComponent } from './veroferta.component';

describe('VerofertaComponent', () => {
  let component: VerofertaComponent;
  let fixture: ComponentFixture<VerofertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerofertaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerofertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
