// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from "@angular/forms";
// import { ProfileService } from "../../shared/services/profile.service";
//
//
// @Component({
//   selector: 'app-create-post',
//   templateUrl: './creat-post.component.html',
//   styleUrls: ['./creat-post.component.scss']
// })
// export class CreatPostComponent implements OnInit {
//   form!: FormGroup;
//   error: object | null = null;
//
//   constructor(private fb: FormBuilder, private profileService: ProfileService) {}
//
//   ngOnInit() {
//     this.form = this.fb.group({
//       title: ['', Validators.maxLength(100)],
//       content: ['', Validators.maxLength(1000)],
//       image: ['']
//     });
//   }
//
//   onSubmit() {
//     const formData = new FormData();
//     formData.append('title', this.form.get('title')!.value);
//     formData.append('content', this.form.get('content')!.value);
//     formData.append('image', this.form.get('image')!.value);
//
//     this.profileService.createPost(formData).subscribe(
//       (response: any) => {
//         console.log(response);
//       },
//       (error: any) => {
//         console.log(error);
//       }
//     );
//   }
// }
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 import { ProfileService } from "../../shared/services/profile.service";



 @Component({
   selector: 'app-create-post',
   templateUrl: './creat-post.component.html',
  styleUrls: ['./creat-post.component.scss']
 })
export class CreatPostComponent implements OnInit {
  createPostForm: FormGroup;
   form: any;

  constructor(
    private formBuilder: FormBuilder,
    private profileService: ProfileService
  ) {}

  ngOnInit() {
    this.createPostForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      image: [null, Validators.required]
    });
  }

  onSubmit() {
    if (this.createPostForm.invalid) {
      return;
    }

    const formData = new FormData();
    formData.append('title', this.createPostForm.value.title);
    formData.append('content', this.createPostForm.value.content);
    formData.append('image', this.createPostForm.value.image);

    this.profileService.createPost(formData).subscribe(
      // Обработка ответа
    );
  }
}
