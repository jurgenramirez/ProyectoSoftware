import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregartcComponent } from './agregartc.component';

describe('AgregartcComponent', () => {
  let component: AgregartcComponent;
  let fixture: ComponentFixture<AgregartcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregartcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregartcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
