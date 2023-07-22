import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageMComponent } from './register-page-m/register-page-m.component';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        RegisterPageMComponent
    ],
    exports: [
        RegisterPageMComponent
    ],
    imports: [
        CommonModule,
      FormsModule,
      ReactiveFormsModule
    ]
})
export class RegisterPageMModule { }
