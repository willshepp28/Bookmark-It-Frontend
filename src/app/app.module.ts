import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from "@angular/forms";

import { NgxSpinnerModule } from "ngx-spinner";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './core/components/create/create/create.component';
import { BookmarkComponent } from './core/components/bookmark/bookmark/bookmark.component';
import { HeaderComponent } from './core/components/header/header/header.component';
import { HomeComponent } from './core/routes/home/home/home.component';



// Services
import { BookmarksService } from './core/services/bookmarks/bookmarks.service';
import { TopicsService } from './core/services/topics/topics.service';
import { BookmarksComponent } from './core/routes/bookmarks/bookmarks/bookmarks.component';
import { TopicComponent } from './core/components/topic/topic/topic.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    BookmarkComponent,
    HeaderComponent,
    BookmarksComponent,
    TopicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    BookmarksService,
    TopicsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
