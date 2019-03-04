import {HttpClient, HttpHeaders} from '@angular/common/http';
import { apiUri } from '../apiUrl';
import {LoginModel} from './models/user/UserLogin';
import {Observable} from 'rxjs';

export class BaseService<T> {

  url: string = apiUri;
  data: T;

  constructor(public http: HttpClient, route: string) {
    this.url += route;
  }

  getHeaders(): HttpHeaders {
    let login: LoginModel = this.getCurrentLogin();
    const headers: any = {'Content-Type': 'application/json'};
    if (login) headers.Authorization = login.authorization.token;
    return new HttpHeaders(headers);
  }

  getHeadersMultiPart(): HttpHeaders {
    let login: LoginModel = this.getCurrentLogin();
    const headers: any = {};
    if (login) headers.Authorization = login.authorization.token;
    return new HttpHeaders(headers);
  }

  getCurrentLogin(): LoginModel {
    let login: LoginModel;
    const data = localStorage.getItem("loginUser");
    if (data) login = JSON.parse(data);
    return login;
  }
  
  Get(id:number):Observable<T>{
    return this.http.get<T>(`${this.url}/${id}`, {headers: this.getHeaders()});
  }

  List(search: string = null): Observable<T[]> {
    let url = search? `${this.url}?search=${search}`: `${this.url}`;
    return this.http.get<T[]>(url, {headers: this.getHeaders()});
  }

  Add(data: T): Observable<T> {
    return this.http.post<T>(this.url, data, {headers: this.getHeaders()});
  }

  Update(id: number, data: T): Observable<T> {
    return this.http.put<T>(`${this.url}/${id}`, data, {headers: this.getHeaders()});
  }
 
  Delete(id: number) {
    return this.http.delete(`${this.url}/${id}`, {headers: this.getHeaders()});
  }
}
