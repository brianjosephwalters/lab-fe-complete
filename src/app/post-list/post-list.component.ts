import { Component } from '@angular/core';

import { PostService } from '../post-service/post.service';

@Component({
    selector: 'post-list',
    templateUrl: 'post-list.component.html',
    styleUrls: ['post-list.component.css']
})
export class PostListComponent {
    private posts: object[];

    constructor(postService: PostService) {
        this.posts = postService.getAllPosts();
    }
}