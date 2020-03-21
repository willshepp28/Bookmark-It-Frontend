import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './core/components/create/create/create.component';
import { BookmarkComponent } from './core/components/bookmark/bookmark/bookmark.component';
import { HeaderComponent } from './core/components/header/header/header.component';
import { HomeComponent } from './core/routes/home/home/home.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
