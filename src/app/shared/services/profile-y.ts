import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProfileY {

  constructor(private http: HttpClient) { }

  submitForm(formData: any, token: string) {

    const headers = new HttpHeaders().set('auth-token', token);

    return this.http.put('http://127.0.0.1:80/api/users/useas/update-profile', formData, { headers });

  }
}
