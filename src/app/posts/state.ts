export const entityCollectionName = "Post";

export const pluralizedEntityName = "posts";

export const entityCollectionEndpoint = pluralizedEntityName;

export interface Post {
       id: number;
       userId: number;
       title: string;
       body: string;
}