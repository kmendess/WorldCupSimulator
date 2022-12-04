import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from '../models/Team';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  apiURL = 'https://localhost:7003/api/teams/groups'
  
  constructor(private httpClient: HttpClient) { }

  public getGroups() {
    return this.httpClient.get<Team[][]>(this.apiURL)
  }
}
