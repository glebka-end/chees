import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileMComponent } from './edit-profile-m/edit-profile-m.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    EditProfileMComponent,

  ],
  exports: [
    EditProfileMComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class EditProfileModule { }
