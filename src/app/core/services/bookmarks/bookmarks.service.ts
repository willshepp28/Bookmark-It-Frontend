import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {
  baseUrl = 'http://localhost:3000/api/bookmarks';

  constructor(private http: HttpClient) { }

  createBookmark(body) {
    return this.http.post(this.baseUrl + '/createBookmarkByTopic', body)
  }

  getBookmarks() {
    return this.http.get(this.baseUrl + '/getLatestBookmarks');
  }
}
