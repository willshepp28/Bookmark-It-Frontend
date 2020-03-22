import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './core/components/create/create/create.component';
import { BookmarkComponent } from './core/components/bookmark/bookmark/bookmark.component';
import { HeaderComponent } from './core/components/header/header/header.component';
import { HomeComponent } from './core/routes/home/home/home.component';



// Services
import { BookmarksService } from './core/services/bookmarks/bookmarks.service';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    BookmarkComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    BookmarksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
