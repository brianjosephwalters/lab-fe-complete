import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


import { PostService } from '../post-service/post.service';
import { Post } from '../post-service/post';

@Component({
    selector: 'post-card',
    templateUrl: 'post-card.component.html',
    styleUrls: ['post-card.component.css']
})
export class PostCardComponent {
    @Input() 
    private post: Post;
    private postService: PostService;
    private router: Router;

    constructor(postService: PostService, router: Router) {
        this.postService = postService;
        this.router = router;
    }

    deletePost() {
        this.postService.deletePost(this.post.postId)
            .then((post) => {
                this.post = post;
                this.router.navigateByUrl('/posts');
            });
    }

}