import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BookmarksService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  createBookmark(bookmark) {
    return this.http.post(this.baseUrl + '/bookmarks/createBookmarkByTopic', bookmark);
  }

  getBookmarks() {
    return this.http.get(this.baseUrl + '/bookmarks/getLatestBookmarks');
  }

  getBookmarksByTopic(topic){
    const params = new HttpParams().set('name', topic);
    return this.http.get(this.baseUrl + '/bookmarks/getBookmarksByTopicTitle', {params});
  }
}
