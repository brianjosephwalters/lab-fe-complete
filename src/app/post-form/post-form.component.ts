import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PostService } from '../post-service/post.service';
import { Post } from '../post-service/post';

@Component({
    selector: 'post-form',
    templateUrl: 'post-form.component.html',
    styleUrls: ['post-form.component.css']
})
export class PostFormComponent {
    private router: Router;
    private postService: PostService;
    private post: Post;
    private postId: number;
    private error: string;

    constructor(postService: PostService, router: Router, route: ActivatedRoute) {
        route.params.subscribe(params => this.postId = params['postId']);
        this.router = router;
        this.postService = postService;
        if (this.postId) {
            postService.getPostById(this.postId)
                .then((post) => this.post = post)
                .catch((error) => this.error = error);
        } else {
            this.post = new Post();
        }
    }

    submitPost() {
        if (this.postId) {
            this.postService.updatePost(this.postId, this.post)
                .then((post) => {
                    this.post = post;
                    this.router.navigateByUrl('/posts/' + this.postId);
                })
                .catch((error) => this.error = error);
        } else {
            this.postService.createPost(this.post)
                .then((post) => {
                    this.post = post;
                    this.router.navigateByUrl('/');
                })
                .catch((error) => this.error = error);
        }

    }

}