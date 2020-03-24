import { Component, OnInit } from '@angular/core';
import { BookmarksService } from 'src/app/core/services/bookmarks/bookmarks.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
  bookmarks: any;
  topic: any = {};

  constructor(
    private route: ActivatedRoute,
    private bookmarkService: BookmarksService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.bookmarkService.getBookmarksByTopic(params.get('topicName')).subscribe(data => {
        this.assignBookmarks(data);
        this.assignTopic(data);
      });
    });
  }




  // Methods
  assignBookmarks(data){
    this.bookmarks = data.Bookmarks;
  }

  assignTopic(data) {
    delete data.Bookmarks;
    this.topic = data;
  }





}
