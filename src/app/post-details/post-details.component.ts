import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'post-details',
    templateUrl: './post-details.component.html',
    styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {

    private postId: number;
    private posts: object[];
    private post: object;

    constructor(route: ActivatedRoute) {
        route.params.subscribe(params => this.postId = params['postId'])
        this.posts = [
            {
                "postId": 1,
                "title": "A first post",
                "summary": "This is the body of our first blog post.",
                "body": "This is the body of our first blog post.",
                "author": "Brian J. Walters",
                "lastUpdated": 1493614800000,
                "createdOn": 1499007681505
            },
            {
                "postId": 2,
                "title": "A second post",
                "summary": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan erat nec justo tempor, ut posuere nisl pretium. Morbi rutrum mauris eu turpis convallis iaculis. Nulla varius purus vitae feugiat venenatis. Proin vulputate augue nibh. Pellentesque facilisis elementum neque ut egestas. Nulla et tortor metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas massa orci, dapibus ut dolor sed, venenatis viverra risus.",
                "body": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan erat nec justo tempor, ut posuere nisl pretium. Morbi rutrum mauris eu turpis convallis iaculis. Nulla varius purus vitae feugiat venenatis. Proin vulputate augue nibh. Pellentesque facilisis elementum neque ut egestas. Nulla et tortor metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas massa orci, dapibus ut dolor sed, venenatis viverra risus.",
                "author": "Brian J. Walters",
                "lastUpdated": 1493701200000,
                "createdOn": 1499007681505
            },
            {
                "postId": 3,
                "title": "A third post",
                "summary": "This is the body of our third blog post.  It has a few more sentences.  But it doesnt have content that is any more interesting.",
                "body": "This is the body of our third blog post.  It has a few more sentences.  But it doesnt have content that is any more interesting.",
                "author": "Brian J. Walters",
                "lastUpdated": 1493701200000,
                "createdOn": 1499007681505
            }
        ];
        this.post = this.posts
                        .filter(post => post['postId'] == this.postId)[0];
    }

}