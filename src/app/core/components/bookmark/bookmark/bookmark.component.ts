import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {
 @Input() bookmarks: any [];

  constructor(
  ) { }

  ngOnInit() {
  }

}
