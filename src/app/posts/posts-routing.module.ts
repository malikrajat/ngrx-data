import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostListComponent } from "./posts-list/posts-list.component";

const routes: Routes = [
       {
              path: "",
              component: PostListComponent
       }
];

@NgModule({
       imports: [RouterModule.forChild(routes)],
       exports: [RouterModule]
})
export class PostsRoutingModule { }