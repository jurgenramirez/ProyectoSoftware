import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSbComponent } from './register-sb.component';

describe('RegisterSbComponent', () => {
  let component: RegisterSbComponent;
  let fixture: ComponentFixture<RegisterSbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
