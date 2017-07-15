import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostService } from '../post-service/post.service';

@Component({
    selector: 'post-details',
    templateUrl: './post-details.component.html',
    styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {

    private postId: number;
    private posts: object[];
    private post: object;

    constructor(route: ActivatedRoute, postService: PostService) {
        route.params.subscribe(params => this.postId = params['postId'])
        this.post = postService.getPostById(this.postId);
    }

}