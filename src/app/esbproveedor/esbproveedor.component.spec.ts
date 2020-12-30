import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsbproveedorComponent } from './esbproveedor.component';

describe('EsbproveedorComponent', () => {
  let component: EsbproveedorComponent;
  let fixture: ComponentFixture<EsbproveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsbproveedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsbproveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
