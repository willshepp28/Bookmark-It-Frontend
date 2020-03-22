import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {
  baseUrl = 'http://localhost:3000/api/topics';

  constructor(
    private http: HttpClient
  ) { }

  createTopic(topic) {
    return this.http.post(this.baseUrl + '/createNewTopic', topic);
  }
}
