import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileYPageComponent } from './profile-y-page.component';

describe('ProfileYPageComponent', () => {
  let component: ProfileYPageComponent;
  let fixture: ComponentFixture<ProfileYPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileYPageComponent]
    });
    fixture = TestBed.createComponent(ProfileYPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
