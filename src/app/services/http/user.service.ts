import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Observable} from 'rxjs';
import {LoginModel, UserModel} from './models/user/UserLogin';
import {BaseService} from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<UserModel>{

  constructor(public http: HttpClient) {
    super(http, "User");
  }

  setCurrentLogin(login: LoginModel) {
    localStorage.setItem("loginUser", JSON.stringify(login));
  }

  canRenderPage(id: number): boolean {
    let isValid: boolean;
    let login = this.getCurrentLogin();
    isValid = login.pages.filter(x => x.pageId == id).length > 0;
    return isValid;
  }

  authenticated(): boolean {
    let login: LoginModel = this.getCurrentLogin();
    return !!login && !!login.authorization.token;
  }

  Authenticate(user: string, pwd: string): Observable<LoginModel> {
    return this.http.post<LoginModel>(this.url + '/Authenticate', {"user": user, "password": pwd}, {});
  }

  UpdateProfile(data: UserModel) {
    return this.http.put(this.url+"/Profile", data, {headers: this.getHeaders()});
  }

  ChangePassword(old: string, change: string) {
    return this.http.put(this.url+"/Password", {oldPassword: old, newPassword: change}, {headers: this.getHeaders()});
  }
}
