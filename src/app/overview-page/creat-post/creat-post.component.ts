import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ProfileService} from '../../shared/services/profile.service';
import {CreatePost} from "../../shared/interfaces";

@Component({
  selector: 'app-create-post',
  templateUrl: './creat-post.component.html',
  styleUrls: ['./creat-post.component.scss']
})
export class CreatPostComponent implements OnInit {

  fileData: any;

  constructor(private profileService: ProfileService) {
  }

  fileEvent(e: any) {
    this.fileData = e.target.files[0];
  }

  onSubmitform(f: NgForm) {
    if (f.invalid) return; // Проверка на валидность формы

    const formData = new FormData();
    formData.append('immage', this.fileData);
    formData.append('contente', f.value.contente);
    formData.append('title', f.value.title);

    this.profileService.createPost(formData).subscribe(resp => {
      alert("Uploaded");
      console.log(resp);
    });
  }

  ngOnInit(): void {
  }
}
