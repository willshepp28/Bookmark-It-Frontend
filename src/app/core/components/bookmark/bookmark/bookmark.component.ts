import { Component, OnInit, Input } from '@angular/core';
import { BookmarksService } from 'src/app/core/services/bookmarks/bookmarks.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {
  @Input() bookmarks: any = [];

  constructor(
    private route: ActivatedRoute,
    private bookmarkService: BookmarksService
  ) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.bookmarks = this.bookmarkService.getBookmarksByTopic(params);
    });
  }

}
