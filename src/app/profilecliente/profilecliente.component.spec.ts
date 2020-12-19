import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileclienteComponent } from './profilecliente.component';

describe('ProfileclienteComponent', () => {
  let component: ProfileclienteComponent;
  let fixture: ComponentFixture<ProfileclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileclienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
