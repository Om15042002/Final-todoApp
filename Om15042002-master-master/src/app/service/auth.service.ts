import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }
  apiURL = "http://localhost:3000";

  registeruser(user: any) {
    console.log('====================================');
    console.log(user);
    console.log('====================================');
    return this.http.post(this.apiURL + '/adduser', user)
  }

  loginvalidation(user: any) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("uname",user.uname );
    queryParams = queryParams.append("upassword",user.upassword );
    return this.http.get(this.apiURL = "/gettask", { params: queryParams })
  }

}
