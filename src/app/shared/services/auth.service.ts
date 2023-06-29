import {Injectable} from "@angular/core";
import {User} from '../interfaces'
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token =''//

  constructor(private hhtp: HttpClient) {
  }
  register(user: User): Observable <User> {
return this.hhtp.post<User>('http://127.0.0.1:/api/user/register',user)
  }
  login(user: User): Observable<{ token: string }> {
    return this.hhtp.post<{ token: string }>('http://127.0.0.1:/api/user/login', user)
      .pipe(
        tap(
          ({token})=>{
            localStorage.setItem('auth-token',token)
            this.setToken(token)
          }
        )
      )
  }
  // setToken(token: string){
  //
  //   this.token=token
  // }
  setToken(token: string) {
    const bearerToken = `Bearer ${token}`;
    localStorage.setItem('auth-token', bearerToken);
    this.token = bearerToken;
  }


  // getToken():string{
  //   return this.token
  // }
  getToken(): string {
    const localToken = localStorage.getItem('auth-token');
    if (localToken) {
      this.setToken(localToken);
    }
    return this.token;
  }

  isAuthenticated():boolean{
    return !!this.token
  }
  // logout(){
  //   this.setToken(null)
  //   localStorage.clear()
  // }
}
