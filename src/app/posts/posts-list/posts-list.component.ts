import { Component, OnInit } from "@angular/core";
import { concat, Observable } from "rxjs";
import { startWith } from "rxjs/operators";
import { FirstDataRenderedEvent } from "ag-grid-community";

import { PostCollectionService } from "../post-collection.service";

@Component({
       selector: "app-posts-list",
       template: `
    <h1>Posts</h1>
    <hr />
    <ag-grid-angular
      class="ag-theme-balham grid"
      [columnDefs]="columns"
      [rowData]="rows$ | async"
      [pagination]="true"
      [paginationAutoPageSize]="true"
      (firstDataRendered)="onFirstDataRendered($event)"
    ></ag-grid-angular>
  `,
       styles: [
              `
      :host {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 5vw;
      }

      .grid {
        height: 80vh;
        width: 90vw;
      }
    `
       ]
})
export class PostListComponent implements OnInit {
       rows$: Observable<any>
       private columnDefaults = {
              resizable: true,
              sortable: true,
              filter: true
       };

       readonly columns = [
              {
                     ...this.columnDefaults,
                     headerName: "ID",
                     field: "id",
                     resizable: false
              },
              {
                     ...this.columnDefaults,
                     headerName: "Title",
                     field: "title"
              },
              {
                     ...this.columnDefaults,
                     headerName: "Body",
                     field: "body"
              }
       ];

       // readonly rows$ = concat(
       //        this.postCollectionService.getAll(),
       //        this.postCollectionService.entities$
       // ).pipe(startWith(null));

       constructor(private postCollectionService: PostCollectionService) {
              this.postCollectionService.entities$
       }

       onFirstDataRendered({ columnApi }: FirstDataRenderedEvent): void {
              columnApi.autoSizeAllColumns();
       }

       ngOnInit() {
              this.rows$ = this.postCollectionService.getAll()
       }

}