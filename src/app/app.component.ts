import {Component, OnInit} from '@angular/core';
import {AuthService} from "./shared/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-front_gleb';
  constructor(private auth: AuthService) {
  }

  ngOnInit(){
    const protentialToken =localStorage.getItem('auth-token')
    if(protentialToken !==null){
      this.auth.setToken(protentialToken)
    }
  }
}
