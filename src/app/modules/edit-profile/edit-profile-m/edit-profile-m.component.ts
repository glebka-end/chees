import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../shared/interfaces";
import {ProfileService} from "../../../shared/services/profile.service";

@Component({
  selector: 'app-edit-profile-m',
  templateUrl: './edit-profile-m.component.html',
  styleUrls: ['./edit-profile-m.component.scss']
})

export class EditProfileMComponent implements OnInit {
  form!: FormGroup;
  error: object | null = null;
  user: User | null = null;

  constructor(private fb: FormBuilder, private profileService: ProfileService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      status: ['', Validators.maxLength(100)],
      first_name: ['', Validators.maxLength(100)],
      last_name: ['', Validators.maxLength(100)],
      age: ['', Validators.maxLength(10)],
      gender: ['', Validators.maxLength(100)],
      is_online: ['', Validators.maxLength(1)],
    });

    // Получение данных пользователя с сервера
    this.profileService.getUserData().subscribe(
      (user: User) => {
        this.user = user;
        this.fillFormWithData();
      },
      (error: any) => {
        console.log(error);
        this.error = error;
      }
    );
  }

  fillFormWithData() {
    if (this.user) {
      this.form.patchValue({
        status: this.user.status,
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        age: this.user.age,
        gender: this.user.gender,
        is_online: this.user.is_online
      });
    }
  }

  onSubmit() {
    const data = this.form.value;
    this.profileService.sendData(data).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
