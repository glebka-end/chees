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
//   selectedFile!: File;
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
//     // const formData = new FormData();
//     // formData.append('title', this.form.get('title')!.value);
//     // formData.append('content', this.form.get('content')!.value);
//     // formData.append('image', this.form.get('image')!.value);
//     //
//     // this.profileService.createPost(formData).subscribe(
//     //   (response: any) => {
//     //     console.log(response);
//     //   },
//     //   (error: any) => {
//     //     console.log(error);
//     //   }
//     // );
//   }
// }

// / import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from "@angular/forms";
// import { ProfileService } from "../../shared/services/profile.service";
//
// interface CreatePost {
//   title: string;
//   content: string;
//   image: File;
// }
//
// @Component({
//   selector: 'app-create-post',
//   templateUrl: './creat-post.component.html',
//   styleUrls: ['./creat-post.component.scss']
// })
// export class CreatPostComponent implements OnInit {
//   form!: FormGroup;
//   error: any | null = null;
//   selectedFile!: File;
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
//     const postData: CreatePost = {
//       title: this.form.get('title')!.value,
//       content: this.form.get('content')!.value,
//       image: this.form.get('image')!.value
//     };
//
//     this.profileService.createPost(postData).subscribe(
//       (response: any) => {
//         console.log(response);
//       },
//       (error: any) => {
//         console.log(error);
//       }
//     );
//   }
//
//   onFileSelected(event: any) {
//     this.selectedFile = event.target.files[0];
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../../shared/services/profile.service';
import {CreatePost} from "../../shared/interfaces";


@Component({
  selector: 'app-create-post',
  templateUrl: './creat-post.component.html',
  styleUrls: ['./creat-post.component.scss']
})
export class CreatPostComponent implements OnInit {
  form!: FormGroup;
  error: any | null = null;

  constructor(private fb: FormBuilder, private profileService: ProfileService) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', Validators.maxLength(100)],
      content: ['', Validators.maxLength(1000)],
      image: [null] // Update to null instead of empty string
    });
  }

  onSubmit() {
    const postData: CreatePost = {
      title: this.form.get('title')!.value,
      content: this.form.get('content')!.value,
      image: null
    };

    const imageControl = this.form.get('image');
    if (imageControl && imageControl.value) {
      const file = (imageControl.value as FileList)[0];
      postData.image = file;
      this.profileService.createPost(postData).subscribe(
        (response: any) => {
          console.log(response);
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.form.patchValue({ image: file });
    this.form.get('image')!.updateValueAndValidity();
  }
}




