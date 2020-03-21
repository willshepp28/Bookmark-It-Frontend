import { Component, OnInit } from '@angular/core';
import { BookmarksService } from 'src/app/core/services/bookmarks/bookmarks.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bookmarks: any = [];
  constructor(
    public bookmarkService: BookmarksService
  ) { }

  ngOnInit() {
    this.loadBookmarks();
  }


  loadBookmarks(){
    return this.bookmarkService.getBookmarks().subscribe(data => {
      console.log(data)
      this.bookmarks = data;
    });
  }

}
