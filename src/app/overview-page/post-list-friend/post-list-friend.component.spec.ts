import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListFriendComponent } from './post-list-friend.component';

describe('PostListFriendComponent', () => {
  let component: PostListFriendComponent;
  let fixture: ComponentFixture<PostListFriendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostListFriendComponent]
    });
    fixture = TestBed.createComponent(PostListFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
