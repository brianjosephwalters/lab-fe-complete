import { Component } from '@angular/core';

import { PostService } from '../post-service/post.service';
import { Post } from '../post-service/post';

@Component({
    selector: 'post-form',
    templateUrl: 'post-form.component.html',
    styleUrls: ['post-form.component.css']
})
export class PostFormComponent {
    private postService: PostService;
    private post: Post;
    private error: string;

    constructor(postService: PostService) {
        this.postService = postService;
        this.post = new Post();
    }

    submitPost() {
        this.postService.createPost(this.post)
            .then((post) => this.post = post)
            .catch((error) => this.error = error);
    }

}