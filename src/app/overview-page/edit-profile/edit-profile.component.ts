import {Component, OnInit,OnDestroy} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {ProfileY} from "../../shared/services/profile-y";
import {ProfileService} from "../../shared/services/profile.service";


interface ApiResponse {
  // Описание свойств объекта response
}

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})

export class EditProfileComponent implements OnInit{
  form!: FormGroup;
  aSub!: Subscription;
  error: object | null = null;


  constructor(private fd: FormBuilder, private profileService: ProfileService,private  ProfileY: ProfileY) {

  }
//   ngOnInit() {
// this.form=this.fd.group({
//
//        username: ( [Validators.required,]),
//        last_name: ( [Validators.required, ]),
//       // last_name: new FormControl(null, [Validators.required, ]),
//       // last_name: new FormControl(null, [Validators.required, ]),
//       // last_name: new FormControl(null, [Validators.required, ]),
//       // last_name: new FormControl(null, [Validators.required, ]),
//       // last_name: new FormControl(null, [Validators.required, ]),
//       // last_name: new FormControl(null, [Validators.required, ]),
//       // last_name: new FormControl(null, [Validators.required, ]),
//
//
//     });
//   }
//   submit(): void{
//     // this.aSub=this.profileService.update(this.form.value).subscribe(
//     // );
//   }

  ngOnInit() {
    this.form = this.fd.group({
      status: ( [Validators.required,]),
      is_online: ( [Validators.required, ]),
    });

  }

  onSubmit() {
    const data = this.form.value;
    this.profileService.sendData(data).subscribe
    ((response: ApiResponse) => console.log(response));
    const token = localStorage.getItem('auth-token');

  }

}
