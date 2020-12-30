import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginprovEsbComponent } from './loginprov-esb.component';

describe('LoginprovEsbComponent', () => {
  let component: LoginprovEsbComponent;
  let fixture: ComponentFixture<LoginprovEsbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginprovEsbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginprovEsbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
