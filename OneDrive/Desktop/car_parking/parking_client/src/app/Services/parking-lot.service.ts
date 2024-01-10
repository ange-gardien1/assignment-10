import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParkingLotService {

  private baseUrl = "http://localhost:5288";
  constructor(private http : HttpClient) { }

  
  getParkingLotById(parkingLotId: number): Observable<any> {
    const url = `${this.baseUrl}/parking-lots/${parkingLotId}`;
    return this.http.get(url);
  }

  getAllParkingLots(): Observable<any[]> {
    const url = `${this.baseUrl}/parking-lots`;
    return this.http.get<any[]>(url);
  }

  createParkingLot(parkingLot: any): Observable<any> {
    const url = `${this.baseUrl}/parking-lots`;
    return this.http.post(url, parkingLot);
  }

  updateParkingLot(parkingLot: any): Observable<any> {
    const url = `${this.baseUrl}/parking-lots/${parkingLot.parkingLotId}`;
    return this.http.put(url, parkingLot);
  }

  deleteParkingLot(parkingLotId: number): Observable<any> {
    const url = `${this.baseUrl}/parking-lots/${parkingLotId}`;
    return this.http.delete(url);
  }
}
