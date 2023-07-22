import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {AuthService} from "../../../shared/services/auth.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-login-page-m',
  templateUrl: './login-page-m.component.html',
  styleUrls: ['./login-page-m.component.scss']
})

export class LoginPageMComponent implements OnInit, OnDestroy {
  form!: FormGroup
  aSub!: Subscription

  constructor(private auth: AuthService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })

    this.route.queryParams.subscribe((params: Params) => {
      if (params['registered']) {
        //теперь вы можете зайти в сиситему используя свои данные
      } else if (params['accessDenied']){
        //для начала авторизуйтесь в  сиситеме
      }
    })
  }

  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe()
    }
  }

  onSubmit() {
// const user={
//  // email: this.form.value.email,
    this.form.disable()//выключить может

    this.aSub = this.auth.login(this.form.value).subscribe(
      () => this.router.navigate(['/overview']),
      error => {
        console.warn(error)
        this.form.enable()
      }
    )
  }

}
