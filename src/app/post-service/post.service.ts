import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

import { Post } from './post';

@Injectable()
export class PostService {
    private http: Http;
    private url: string = environment.apiUrl;

    constructor(http: Http) {
        this.http = http;
    }

    getAllPosts(): Promise<Post[]> {
        return this.http.get(this.url)
            .toPromise()
            .then(response => response.json() as Post[])
            .catch(this.handleError);
    }

    getPostById(postId: number): Promise<Post> {
        return this.http.get(this.url + `/${postId}`)
            .toPromise()
            .then(response => response.json() as Post)
            .catch(this.handleError);
    }

    createPost(post: Post): Promise<Post> {
        return this.http.post(this.url + "/", post)
            .toPromise()
            .then(response => response.json() as Post)
            .catch(this.handlePostError);
    }

    updatePost(postId: number, post: Post): Promise<Post> {
        return this.http.put(this.url + `/${postId}`, post)
            .toPromise()
            .then(response => response.json() as Post)
            .catch(this.handlePutError);
    }

    deletePost(postId: number): Promise<Post> {
        return this.http.delete(this.url + `/${postId}`)
            .toPromise()
            .then(response => response.json() as Post)
            .catch(this.handleDeleteError);
    }

    private handleError(error: any): Promise<string> {
        console.log(error);
        return Promise.reject("Unable to retrieve post data.");
    }

    private handlePostError(error: any): Promise<string> {
        console.log(error);
        return Promise.reject("Unable to create post.");
    }

    private handlePutError(error: any): Promise<string> {
        console.log(error);
        return Promise.reject("Unable to update post.");
    }

    private handleDeleteError(error: any): Promise<string> {
        console.log(error);
        return Promise.reject("Unable to delete post.");
    }

}