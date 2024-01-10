import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
private baseUrl = "http://localhost:5288"
  constructor(private http : HttpClient) { }

  getAgentById(agentId: number): Observable<any> {
    const url = `${this.baseUrl}/agents/${agentId}`;
    return this.http.get(url);
  }
  getAllAgents(): Observable<any[]> {
    const url = `${this.baseUrl}/agents`;
    return this.http.get<any[]>(url);
  }

  createAgent(agent: any): Observable<any> {
    const url = `${this.baseUrl}/agents`;
    return this.http.post(url, agent);
  }

  updateAgent(agent: any): Observable<any> {
    const url = `${this.baseUrl}/agents/${agent.agentId}`;
    return this.http.put(url, agent);
  }

  deleteAgent(agentId: number): Observable<any> {
    const url = `${this.baseUrl}/agents/${agentId}`;
    return this.http.delete(url);
  }
}
