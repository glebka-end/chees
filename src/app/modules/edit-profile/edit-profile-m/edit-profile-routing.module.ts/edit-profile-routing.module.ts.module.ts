import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EditProfileMComponent} from "../edit-profile-m.component";

const routes: Routes = [
  {
    path: '',
    component: EditProfileMComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditProfileRoutingModule {}
