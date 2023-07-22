import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageMComponent } from './login-page-m.component';

describe('LoginPageMComponent', () => {
  let component: LoginPageMComponent;
  let fixture: ComponentFixture<LoginPageMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPageMComponent]
    });
    fixture = TestBed.createComponent(LoginPageMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
