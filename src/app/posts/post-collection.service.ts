
import { Injectable } from "@angular/core";
import { EntityCollectionServiceBase } from "@ngrx/data";
import { EntityCollectionServiceElementsFactory } from "@ngrx/data";

import * as fromPosts from ".";

@Injectable()
export class PostCollectionService extends EntityCollectionServiceBase<
fromPosts.Post
> {
       constructor(
              readonly elementsFactory: EntityCollectionServiceElementsFactory
       ) {
              super(fromPosts.entityCollectionName, elementsFactory);
       }
}