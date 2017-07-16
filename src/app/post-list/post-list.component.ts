import { Component } from '@angular/core';

import { PostService } from '../post-service/post.service';
import { Post } from '../post-service/post';

@Component({
    selector: 'post-list',
    templateUrl: 'post-list.component.html',
    styleUrls: ['post-list.component.css']
})
export class PostListComponent {
    private posts: Post[];
    private error: string;
    
    constructor(postService: PostService) {
        postService.getAllPosts()
            .then((posts) => this.posts = posts)
            .catch((error) => this.error = error);
    }
}