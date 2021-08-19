import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8081/api';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http: HttpClient) { }

  public loginUserFromRemote(user: User):Observable<any>{
    return this._http.post<any>(`${baseUrl}/login`,user);
  }

  public registerNewUser(user:User):Observable<any>{
    return this._http.post<any>(`${baseUrl}/registeruser`,user);
  }
}
