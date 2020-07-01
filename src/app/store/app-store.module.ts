
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { EntityDataModule, DefaultDataServiceConfig } from "@ngrx/data";

import { PostCollectionService } from "../posts/post-collection.service";

import * as fromPosts from "../posts";

const NGRX_STORE_CONFIGURATION = {};

const REGISTERED_EFFECTS = [];

const ENTITY_METADATA = {
	[fromPosts.entityCollectionName]: {}
};

const ENTITY_PLURAL_NAMES = {
	[fromPosts.entityCollectionName]: fromPosts.pluralizedEntityName
};

const NGRX_DATA_SERVICE_CONFIGURATION = {
	root: "https://jsonplaceholder.typicode.com/"
};

@NgModule({
	imports: [
		CommonModule,
		StoreModule.forRoot(NGRX_STORE_CONFIGURATION),
		EffectsModule.forRoot(REGISTERED_EFFECTS),
		EntityDataModule.forRoot({
			entityMetadata: ENTITY_METADATA,
			pluralNames: ENTITY_PLURAL_NAMES
		})
	],
	providers: [
		{
			provide: DefaultDataServiceConfig,
			useValue: NGRX_DATA_SERVICE_CONFIGURATION
		},
		PostCollectionService
	]
})
export class AppStoreModule { }