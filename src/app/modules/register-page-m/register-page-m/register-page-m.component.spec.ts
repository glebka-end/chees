import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPageMComponent } from './register-page-m.component';

describe('RegisterPageMComponent', () => {
  let component: RegisterPageMComponent;
  let fixture: ComponentFixture<RegisterPageMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterPageMComponent]
    });
    fixture = TestBed.createComponent(RegisterPageMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
