import { Component, OnInit } from '@angular/core';
import { BookmarksService } from 'src/app/core/services/bookmarks/bookmarks.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { TopicsService } from 'src/app/core/services/topics/topics.service';
import { finalize } from 'rxjs/operators';

import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  topics: any = [];
  createTopic: FormGroup;
  createBookmark: FormGroup;
  showTopics: boolean;
  submitted = false;
  showTopicMessage = {
    show: false,
    message: false

  };
  showBookmarkMessage = {
    show: false,
    message: false
  };


  constructor(
    public bookmarkService: BookmarksService,
    private topicService: TopicsService,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.loadBookmarks();

    this.createTopic = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    });

    this.createBookmark = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      subject: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(500)]],
      link_url: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(300)]],
    });
  }


  loadBookmarks() {
    this.startLoadingSpinner();
    return this.topicService.getTopic().subscribe(data => {
      this.topics = data;
      this.stopLoadingSpinner();
    });
  }



  addNewTopic() {
    this.submitted = true;

    // stop the process here if form is invalid
    if (this.createBookmark.invalid) {
        return;
    }

    return this.topicService.createTopic(this.createTopic.value).pipe(
      finalize(() => this.clearFormAndRemoveMessage('createTopic', 'showTopicMessage'))
    ).subscribe(
    success => {
      this.setMessageVisiblityAndStatus('showTopicMessage', true, true);
    },
    error => {
      this.setMessageVisiblityAndStatus('showTopicMessage', true, false);
    });
  }



  addNewBookmark() {
    this.submitted = true;

    // stop the process here if form is invalid
    if (this.createBookmark.invalid) {
        return;
    }

    return this.bookmarkService.createBookmark(this.createBookmark.value).pipe(
      finalize(() =>  this.clearFormAndRemoveMessage('createBookmark', 'showBookmarkMessage'))
    ).subscribe(
    success => {
      this.setMessageVisiblityAndStatus('showBookmarkMessage', true, true);
    },
    error => {
      this.setMessageVisiblityAndStatus('showBookmarkMessage', true, false);
    }
    );
  }



  clearFormAndRemoveMessage(formName, messageName) {
    this.clearForm(formName);
    this.removeMessage(messageName, 2000);
  }



  setMessageVisiblityAndStatus(messageName, showStatus, messageStatus) {
    this[messageName].show = showStatus;
    this[messageName].message = messageStatus;
  }



  clearForm(formName) {
    this[formName].reset();
  }



  removeMessage(messageName, time) {
    setTimeout(() => {
      this[messageName].show = false;
    }, time);
  }

  startLoadingSpinner() {
    this.showTopics = false;
    this.spinner.show();
  }

  stopLoadingSpinner() {
    this.showTopics = true;
    this.spinner.hide();
  }

}
