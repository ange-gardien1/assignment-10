import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserParkingHistoryService {

  private baseUrl = "http://localhost:5288";

  constructor(private http : HttpClient) { }

  getUserParkingHistoryById(userParkingHistoryId: number): Observable<any> {
    const url = `${this.baseUrl}/user-parking-history/${userParkingHistoryId}`;
    return this.http.get(url);
  }
  getAllUserParkingHistory(): Observable<any[]> {
    const url = `${this.baseUrl}/user-parking-history`;
    return this.http.get<any[]>(url);
  }

  createUserParkingHistory(userParkingHistory: any): Observable<any> {
    const url = `${this.baseUrl}/user-parking-history`;
    return this.http.post(url, userParkingHistory);
  }

  updateUserParkingHistory(userParkingHistory: any): Observable<any> {
    const url = `${this.baseUrl}/user-parking-history/${userParkingHistory.userParkingHistoryId}`;
    return this.http.put(url, userParkingHistory);
  }

  deleteUserParkingHistory(userParkingHistoryId: number): Observable<any> {
    const url = `${this.baseUrl}/user-parking-history/${userParkingHistoryId}`;
    return this.http.delete(url);
  }
}
