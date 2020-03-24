import { Component, OnInit } from '@angular/core';
import { BookmarksService } from 'src/app/core/services/bookmarks/bookmarks.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
  bookmarks: any = [];

  constructor(
    private route: ActivatedRoute,
    private bookmarkService: BookmarksService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.bookmarks = this.bookmarkService.getBookmarksByTopic(params.get('topicName')).subscribe();
    });
  }

}
