import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss']
})
export class SiteLayoutComponent implements OnInit{
links=[
  {url:'/overview',name:'профиль тренера'},
  {url:'/profile-y',name:'ваш профиль'},
  {url:'/tasks',name:'шахматные задачи'},
  {url:'/debuts',name:'дебюты'},
  {url:'/play',name:'играть в шахматы'},
  {url:'/articles',name:'статьи'},

]
constructor(private auth: AuthService,
            private router: Router) {
}
ngOnInit() {
}
log(event:Event){
event.preventDefault()
  this.auth.logout()
}

}
