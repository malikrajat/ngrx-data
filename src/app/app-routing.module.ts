import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as fromPosts from './posts';

const routes: Routes = [{
  path: '',
  loadChildren: () => import("./posts/posts.module").then(m => m.PostsModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
