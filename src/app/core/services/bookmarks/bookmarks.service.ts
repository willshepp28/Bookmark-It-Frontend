import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  createBookmark(bookmark) {
    return this.http.post(this.baseUrl + '/createBookmarkByTopic', bookmark);
  }

  getBookmarks() {
    return this.http.get(this.baseUrl + '/getLatestBookmarks');
  }
}
