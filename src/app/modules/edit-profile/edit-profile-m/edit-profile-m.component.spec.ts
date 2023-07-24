import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileMComponent } from './edit-profile-m.component';

describe('EditProfileMComponent', () => {
  let component: EditProfileMComponent;
  let fixture: ComponentFixture<EditProfileMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditProfileMComponent]
    });
    fixture = TestBed.createComponent(EditProfileMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
