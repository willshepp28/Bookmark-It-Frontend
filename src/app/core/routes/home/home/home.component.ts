import { Component, OnInit } from '@angular/core';
import { BookmarksService } from 'src/app/core/services/bookmarks/bookmarks.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { TopicsService } from 'src/app/core/services/topics/topics.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bookmarks: any = [];
  createTopic: any;
  createBookmark: any;

  constructor(
    public bookmarkService: BookmarksService,
    private topicService: TopicsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.loadBookmarks();

    this.createTopic = this.formBuilder.group({
      title: ['', Validators.required],
    });

    this.createBookmark = this.formBuilder.group({
      title: ['', Validators.required]
    })
  }


  loadBookmarks(){
    return this.bookmarkService.getBookmarks().subscribe(data => {
      console.log(data);
      this.bookmarks = data;
    });
  }


  addNewTopic(topic){
    return this.topicService.createTopic(topic);
  }


  addNewBookmark(bookmark){
    return this.bookmarkService.createBookmark(bookmark);
  }

}
