import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Post } from './post';

@Injectable()
export class PostService {
    private http: Http;
    private url: string = 'http://localhost:8080/api/v1/post';

    constructor(http: Http) {
        this.http = http;
    }

    getAllPosts(): Promise<Post[]> {
        return this.http.get(this.url)
            .toPromise()
            .then(response => response.json() as Post[]);
    }

    getPostById(postId: number): Promise<Post> {
        return this.http.get(this.url + `/${postId}`)
            .toPromise()
            .then(response => response.json() as Post);
    }
}