import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/routes/home/home/home.component';
import { BookmarksComponent } from './core/routes/bookmarks/bookmarks/bookmarks.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent},
  { path: 'bookmarks/:topicName', component: BookmarksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
