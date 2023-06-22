import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCPageComponent } from './profile-c-page.component';

describe('ProfileCPageComponent', () => {
  let component: ProfileCPageComponent;
  let fixture: ComponentFixture<ProfileCPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileCPageComponent]
    });
    fixture = TestBed.createComponent(ProfileCPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
