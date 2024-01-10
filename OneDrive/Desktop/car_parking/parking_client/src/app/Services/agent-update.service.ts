import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentUpdateService {

  private baseUrl = "http://localhost:5288"
  constructor(private http : HttpClient) { }
  
  getAgentUpdateById(agentUpdateId: number): Observable<any> {
    const url = `${this.baseUrl}/agent-updates/${agentUpdateId}`;
    return this.http.get(url);
  }
  getAllAgentUpdates(): Observable<any[]> {
    const url = `${this.baseUrl}/agent-updates`;
    return this.http.get<any[]>(url);
  }

  createAgentUpdate(agentUpdate: any): Observable<any> {
    const url = `${this.baseUrl}/agent-updates`;
    return this.http.post(url, agentUpdate);
  }

  updateAgentUpdate(agentUpdate: any): Observable<any> {
    const url = `${this.baseUrl}/agent-updates/${agentUpdate.agentUpdateId}`;
    return this.http.put(url, agentUpdate);
  }

  deleteAgentUpdate(agentUpdateId: number): Observable<any> {
    const url = `${this.baseUrl}/agent-updates/${agentUpdateId}`;
    return this.http.delete(url);
  }
}
