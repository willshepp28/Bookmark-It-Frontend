import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {
  baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  createTopic(topic) {
    return this.http.post(this.baseUrl + '/topics/createNewTopic', topic);
  }
}
