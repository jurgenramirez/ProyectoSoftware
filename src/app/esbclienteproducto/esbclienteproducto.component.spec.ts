import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsbclienteproductoComponent } from './esbclienteproducto.component';

describe('EsbclienteproductoComponent', () => {
  let component: EsbclienteproductoComponent;
  let fixture: ComponentFixture<EsbclienteproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsbclienteproductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsbclienteproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
