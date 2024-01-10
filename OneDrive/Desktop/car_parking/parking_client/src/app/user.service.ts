import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from, tap } from 'rxjs';
import { Users } from './models/users';
import { Geolocation, Position } from '@capacitor/geolocation';


@Injectable({
  providedIn: 'root'
})
export class UserService {

 baseUrl: string = "http://localhost:5288/api/Auth";
 private tokenName : string = 'myUserToken';
 private _isLoggedIn = new BehaviorSubject(false);
 isLoggedIn =  this._isLoggedIn.asObservable();

  constructor(private http: HttpClient) {
    if(localStorage.getItem(this.tokenName))
    {
      this._isLoggedIn.next(true);
    }
   }

   SignUp(newUser: Users)
   {
    return this.http.post(this.baseUrl + '/register', newUser);
   }

   login(PhoneNumber: string, Password : string)
   {
    let querryParasm = new HttpParams();
    querryParasm = querryParasm.append('PhoneNumber', PhoneNumber);
    querryParasm = querryParasm.append('Password', Password);
    return this.http.get(`${this.baseUrl}/login`,{params : querryParasm, responseType: 'text'})
    .pipe(tap((Response: any) => {
      localStorage.setItem(this.tokenName,Response);
      if (Response)
      {
        this._isLoggedIn.next(true);
      }
      else
      {
        this._isLoggedIn.next(false)
      }
    }));
   }
         logout()
         {
          localStorage.removeItem(this.tokenName);
          this._isLoggedIn.next(false)
         }
  getUserById(userId: number): Observable<any> {
    const url = `${this.baseUrl}/users/${userId}`;
    return this.http.get(url);
  }

  getAllUsers(): Observable<any[]> {
    const url = `${this.baseUrl}/users`;
    return this.http.get<any[]>(url);
  }

  getCurrentUser(): Observable<Users>
  {
   let reqHeaders = {
     Authorization : `Bearer ${localStorage.getItem(this.tokenName)}`
   }
   return this.http.get<Users>(`${this.baseUrl}/current`,{headers: reqHeaders})
  }
  updateUser(user: any): Observable<any> {
    const url = `${this.baseUrl}/users/${user.userId}`;
    return this.http.put(url, user);
  }

  deleteUser(userId: number): Observable<any> {
    const url = `${this.baseUrl}/users/${userId}`;
    return this.http.delete(url);
  }

  getCurrentPosition(): Observable<Position> {
    return from(Geolocation.getCurrentPosition());
};
}

