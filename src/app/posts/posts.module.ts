import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AgGridModule } from "ag-grid-angular";

import { PostsRoutingModule } from "./posts-routing.module";
import { PostListComponent } from "./posts-list/posts-list.component";


const AG_GRID_CUSTOM_COMPONENTS = [];

@NgModule({
       imports: [
              CommonModule,
              AgGridModule.withComponents(AG_GRID_CUSTOM_COMPONENTS),
              PostsRoutingModule
       ],
       declarations: [PostListComponent]
})
export class PostsModule { }