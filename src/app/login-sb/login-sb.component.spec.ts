import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSbComponent } from './login-sb.component';

describe('LoginSbComponent', () => {
  let component: LoginSbComponent;
  let fixture: ComponentFixture<LoginSbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
